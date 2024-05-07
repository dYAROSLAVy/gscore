import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import { baseApi } from "@/shared/redux/base-api";
import { BuySubscribePutParams } from "../model/types";

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    buySubscribe: builder.mutation<void, BuySubscribePutParams>({
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
