import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { PaginatedResult } from "types/pagination";
import { Photo, Profile, UserEvent } from "types/profile";
import { User, UserFormValues } from "types/user";
import router from "next/router";
import { EventFormValues } from "types/event";
import { store } from "stores/store";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = process.env.NEXT_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;

  if (token) {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  async (response) => {
    // Mock Delay
    if (process.env.NODE_ENV === "development") {
      await sleep(1000);
    }

    const pagination = response.headers["pagination"];

    if (pagination) {
      response.data = new PaginatedResult(
        response.data,
        JSON.parse(pagination)
      );
      return response as AxiosResponse<PaginatedResult<any>>;
    }

    return response;
  },
  (error: AxiosError) => {
    const { data, status, config, headers } = error.response!;

    switch (status) {
      case 400: {
        if (config.method === "get" && data.errors.hasOwnProperty("id")) {
          router.push("/not-found");
        }

        if (data.errors) {
          const modalStateErrors = [];

          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      }
      case 401: {
        if (
          status === 401 &&
          headers["www-authenticate"]?.startsWith(
            'Bearer error="invalid_token"'
          )
        ) {
          store.userStore.logout();
          toast.error("Session expired - please login again");
        }
        break;
      }
      case 404: {
        // router.push("/not-found");
        break;
      }
      case 500: {
        store.commonStore.setServerError(data);
        router.push("/server-error");
        break;
      }
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Events = {
  list: (params: URLSearchParams) =>
    axios
      .get<PaginatedResult<Event[]>>("/events", { params })
      .then(responseBody),
  details: (id: string) => requests.get<Event>(`/events/${id}`),
  create: (event: EventFormValues) => requests.post<void>("/events", event),
  update: (event: EventFormValues) =>
    requests.put<void>(`/events/${event.id}`, event),
  delete: (id: string) => requests.del<void>(`/events/${id}`),
  attend: (id: string) => requests.post<void>(`/events/${id}/attend`, {}),
};

const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
  fbLogin: (accessToken: string) =>
    requests.post<User>(`/account/fbLogin?accessToken=${accessToken}`, {}),
  refreshToken: () => requests.post<User>("/account/refreshToken", {}),
  verifyEmail: (token: string, email: string) =>
    requests.post<void>(
      `/account/verifyEmail?token=${token}&email=${email}`,
      {}
    ),
  resendEmailConfirm: (email: string) =>
    requests.get(`/account/resendEmailConfirmationLink?email=${email}`),
};

const Profiles = {
  get: (username: string) => requests.get<Profile>(`/profiles/${username}`),
  uploadPhoto: (file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios.post<Photo>("photos", formData, {
      headers: { "Content-type": "multipart/form-data" },
    });
  },
  setMainPhoto: (id: string) => requests.post(`/photos/${id}/setMain`, {}),
  deletePhoto: (id: string) => requests.del(`/photos/${id}`),
  updateProfile: (profile: Partial<Profile>) =>
    requests.put(`/profiles`, profile),
  updateFollowing: (username: string) =>
    requests.post(`/follow/${username}`, {}),
  listFollowings: (username: string, predicate: string) =>
    requests.get<Profile[]>(`/follow/${username}?predicate=${predicate}`),
  listEvents: (username: string, predicate: string) =>
    requests.get<UserEvent[]>(
      `/profiles/${username}/events?predicate=${predicate}`
    ),
};

const agent = {
  Events,
  Account,
  Profiles,
};

export default agent;
