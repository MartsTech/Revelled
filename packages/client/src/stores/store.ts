import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";
import EventStore from "./eventStore";
import ProfileStore from "./profileStore";

interface Store {
  commonStore: CommonStore;
  eventStore: EventStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;
  userStore: UserStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  eventStore: new EventStore(),
  modalStore: new ModalStore(),
  profileStore: new ProfileStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
