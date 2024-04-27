import { Subscribe } from "@/entities/types";
import { baseApi } from "@/shared/redux/base-api";

export const subscribesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubscribesSelf: builder.query<Subscribe[], string | undefined>({
      query: (token) => ({
        url: "subscribe/self",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetSubscribesSelfQuery } = subscribesApi;
