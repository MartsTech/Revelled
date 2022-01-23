import { makeAutoObservable, runInAction } from "mobx";
import agent from "api/agent";
import { User, UserFormValues } from "types/user";
import { store } from "./store";
import router from "next/router";

class UserStore {
  user: User | null = null;
  refreshTokenTimeout: any;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      router.push("/dash");
    } catch (error) {
      throw error;
    }
  };

  logout = async () => {
    await agent.Account.logout();
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.user = null;
    router.push("/login");
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
    } catch (error) {
      console.error(error);
    }
  };

  register = async (creds: UserFormValues) => {
    try {
      await agent.Account.register(creds);
      router.push(`/account/registerSuccess?email=${creds.email}`);
    } catch (error) {
      throw error;
    }
  };

  setImage = (image: string) => {
    if (this.user) {
      this.user.image = image;
    }
  };

  setDisplayName = (name: string) => {
    if (this.user) {
      this.user.displayName = name;
    }
  };
}

export default UserStore;
