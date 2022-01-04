import { Profile } from "./profile";

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  hostUsername: string;
  isCancelled: boolean;
  isGoing: boolean;
  isHost: boolean;
  host?: Profile;
  attendees: Profile[];
}

export class Event implements Event {
  constructor(init?: EventFormValues) {
    Object.assign(this, init);
  }
}

export class EventFormValues {
  id?: string = undefined;
  title: string = "";
  description: string = "";
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(event?: EventFormValues) {
    if (event) {
      this.id = event.id;
      this.title = event.title;
      this.description = event.description;
      this.startDate = event.startDate;
      this.endDate = event.endDate;
    }
  }
}
