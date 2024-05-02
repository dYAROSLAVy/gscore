import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import { baseApi } from "@/shared/redux/base-api";

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    buySubscribe: builder.mutation<{}, { token?: string; priceId?: number }>({
      query: ({ token, ...body }) => ({
        url: API_URL.buySubscribe,
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

export const { useBuySubscribeMutation } = paymentsApi;
