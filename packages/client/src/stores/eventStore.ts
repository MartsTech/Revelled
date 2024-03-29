import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "api/agent";
import { format } from "date-fns";
import { store } from "./store";
import { Pagination, PagingParams } from "types/pagination";
import { Event, EventFormValues } from "types/event";
import { Profile } from "types/profile";

class EventStore {
  eventRegistry = new Map<string, Event>();
  selectedEvent: Event | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;
  pagination: Pagination | null = null;
  pagingParams = new PagingParams();
  predicate = new Map().set("all", true);

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.predicate.keys(),
      () => {
        this.pagingParams = new PagingParams();
        this.eventRegistry.clear();
        this.loadEvents();
      }
    );
  }

  setPagingParams = (pagingParams: PagingParams) => {
    this.pagingParams = pagingParams;
  };

  setPredicate = (predicate: string, value: string | Date) => {
    const resetPredicate = () => {
      this.predicate.forEach((_value, key) => {
        if (key !== "startDate") {
          this.predicate.delete(key);
        }
      });
    };
    switch (predicate) {
      case "all":
        resetPredicate();
        this.predicate.set("all", true);
        break;
      case "isGoing":
        resetPredicate();
        this.predicate.set("isGoing", true);
        break;
      case "isHost":
        resetPredicate();
        this.predicate.set("isHost", true);
        break;
      case "startDate":
        this.predicate.delete("startDate");
        this.predicate.set("startDate", value);
    }
  };

  get axiosParams() {
    const params = new URLSearchParams();
    params.append("pageNumber", this.pagingParams.pageNumber.toString());
    params.append("pageSize", this.pagingParams.pageSize.toString());
    this.predicate.forEach((value, key) => {
      if (key === "startDate") {
        params.append(key, (value as Date).toISOString());
      } else {
        params.append(key, value);
      }
    });
    return params;
  }

  get eventsByDate() {
    return Array.from(this.eventRegistry.values()).sort(
      (a, b) => a.startDate!.getTime() - b.startDate!.getTime()
    );
  }

  get groupedEvents() {
    return Object.entries(
      this.eventsByDate.reduce((events, event) => {
        const date = format(event.startDate!, "dd MMM yyyy");
        events[date] = events[date] ? [...events[date], event] : [event];
        return events;
      }, {} as { [key: string]: Event[] })
    );
  }

  loadEvents = async (next: boolean = false) => {
    if (!next && this.eventRegistry.size !== 0) {
      return;
    }

    this.loadingInitial = true;
    try {
      const result = await agent.Events.list(this.axiosParams);
      result.data.forEach((event) => {
        this.setEvent(event);
      });
      this.setPagination(result.pagination);
      this.setLoadingInitial(false);
    } catch (error) {
      console.error(error);
      this.setLoadingInitial(false);
    }
  };

  setPagination = (pagination: Pagination) => {
    this.pagination = pagination;
  };

  loadEvent = async (id: string) => {
    let event = this.getEvent(id);

    if (event) {
      this.selectedEvent = event;
      return event;
    }

    this.loadingInitial = true;

    try {
      event = await agent.Events.details(id);
      this.setEvent(event);
      runInAction(() => {
        this.selectedEvent = event;
      });
      this.setLoadingInitial(false);
      return event;
    } catch (error) {
      console.error(error);
      this.setLoadingInitial(false);
    }
    return null;
  };

  private setEvent = (event: Event) => {
    const user = store.userStore.user;
    if (user) {
      event.isGoing = event.attendees!.some(
        (a) => a.username === user.username
      );
      event.isHost = event.hostUsername === user.username;
      event.host = event.attendees?.find(
        (x) => x.username === event.hostUsername
      );
    }
    event.startDate = new Date(event.startDate!);
    this.eventRegistry.set(event.id, event);
  };

  private getEvent = (id: string) => {
    return this.eventRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createEvent = async (event: EventFormValues) => {
    const user = store.userStore.user;
    const attendee = new Profile(user!);
    try {
      await agent.Events.create(event);
      const newEvent = new Event(event);
      newEvent.hostUsername = user!.username;
      newEvent.attendees = [attendee];
      this.setEvent(newEvent);
      runInAction(() => {
        this.selectedEvent = newEvent;
      });
    } catch (error) {
      console.error(error);
    }
  };

  updateEvent = async (event: EventFormValues) => {
    try {
      await agent.Events.update(event);
      runInAction(() => {
        if (event.id) {
          let updatedEvent = {
            ...this.getEvent(event.id),
            ...event,
          };
          this.eventRegistry.set(event.id, updatedEvent as Event);
          this.selectedEvent = updatedEvent as Event;
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteEvent = async (id: string) => {
    this.loading = true;
    try {
      await agent.Events.delete(id);
      runInAction(() => {
        this.eventRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateAttendance = async () => {
    const user = store.userStore.user;
    this.loading = true;
    try {
      await agent.Events.attend(this.selectedEvent!.id);
      runInAction(() => {
        if (this.selectedEvent?.isGoing) {
          this.selectedEvent.attendees = this.selectedEvent.attendees?.filter(
            (a) => a.username !== user?.username
          );
          this.selectedEvent.isGoing = false;
        } else {
          const attendee = new Profile(user!);
          this.selectedEvent?.attendees?.push(attendee);
          this.selectedEvent!.isGoing = true;
        }
        this.eventRegistry.set(this.selectedEvent!.id, this.selectedEvent!);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  cancelEventToggle = async () => {
    this.loading = true;
    try {
      await agent.Events.attend(this.selectedEvent!.id);
      runInAction(() => {
        this.selectedEvent!.isCancelled = !this.selectedEvent?.isCancelled;
        this.eventRegistry.set(this.selectedEvent!.id, this.selectedEvent!);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  updateAttendeeFollowing = (username: string) => {
    this.eventRegistry.forEach((event) => {
      event.attendees.forEach((attendee) => {
        if (attendee.username === username) {
          attendee.following
            ? attendee.followersCount--
            : attendee.followersCount++;
          attendee.following = !attendee.following;
        }
      });
    });
  };

  clearSelectedEvent = () => {
    this.selectedEvent = undefined;
  };
}

export default EventStore;
