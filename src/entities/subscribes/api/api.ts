import { Subscribe } from "@/entities/types";
import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import { baseApi } from "@/shared/redux/base-api";

export const subscribesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubscribesSelf: builder.query<Subscribe[], string | undefined>({
      query: (token) => ({
        url: API_URL.getSubscribesSelf,
        method: HTTP_METHODS.get,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Subscribes"],
    }),
    changeProduct: builder.mutation<{}, { token?: string; productId?: number, subscribeId?: number }>({
      query: ({ token, ...body }) => ({
        url: API_URL.changeProduct,
        method: HTTP_METHODS.post,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Subscribes"],
    }),
  }),
});

export const { useGetSubscribesSelfQuery, useChangeProductMutation } = subscribesApi;
