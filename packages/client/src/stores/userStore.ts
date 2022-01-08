import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "api/agent";
import { User } from "types/user";
import { store } from "./store";
import router from "next/router";
import { getSession, signIn, signOut } from "next-auth/react";

class UserStore {
  user: User | null = null;
  fbAccessToken: string | null = null;
  fbLoading = false;
  refreshTokenTimeout: any;

  constructor() {
    makeAutoObservable(this);

    getSession().then(
      // @ts-ignore
      (session) => (this.fbAccessToken = session?.user.accessToken)
    );

    reaction(
      () => this.fbAccessToken,
      (token) => {
        const user = JSON.parse(window.localStorage.getItem("user") as string);

        if (user) {
          this.user = user;
        } else if (token && !this.isLoggedIn) {
          this.apiLogin(token);
        }
      }
    );

    reaction(
      () => this.user,
      (user) => {
        if (user) {
          window.localStorage.setItem("user", JSON.stringify(user));
        } else {
          window.localStorage.removeItem("user");
        }
      }
    );
  }

  get isLoggedIn() {
    return !!this.user;
  }

  facebookLogin = async (id: string) => {
    this.fbLoading = true;

    if (this.fbAccessToken) {
      return this.apiLogin(this.fbAccessToken);
    }

    await signIn(id, { redirect: false });

    const session = await getSession();

    if (session) {
      // @ts-ignore
      this.fbAccessToken = session.user.accessToken;
    }
  };

  private apiLogin = async (accessToken: string) => {
    try {
      const user = await agent.Account.fbLogin(accessToken);

      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);

      runInAction(() => {
        this.user = user;
        this.fbLoading = false;
      });
    } catch (error) {
      console.error(error);
      runInAction(() => (this.fbLoading = false));
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.user = null;
    signOut();
    router.push("/");
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

  refreshToken = async () => {
    this.stopRefreshTokenTimer();

    try {
      const user = await agent.Account.refreshToken();
      runInAction(() => (this.user = user));

      store.commonStore.setToken(user.token);

      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  };

  private startRefreshTokenTimer(user: User) {
    const jwtToken = JSON.parse(atob(user.token.split(".")[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}

export default UserStore;
