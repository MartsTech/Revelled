import { makeAutoObservable, reaction } from "mobx";
import type { ServerError } from "types/serverError";

class CommonStore {
  error: ServerError | null = null;
  token: string | null = null;
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      this.token = window.localStorage.getItem("jwt");
    }

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem("jwt", token);
        } else {
          window.localStorage.removeItem("jwt");
        }
      }
    );
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  };

  setToken = (token: string | null) => {
    this.token = token;
  };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}

export default CommonStore;
