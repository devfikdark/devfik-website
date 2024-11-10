import axios, { type CreateAxiosDefaults, AxiosInstance } from "axios";

export const createApi = (config?: CreateAxiosDefaults<unknown> | undefined): AxiosInstance =>
  axios.create({ ...config });

export const baseApi: AxiosInstance = createApi({
  baseURL: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
});
