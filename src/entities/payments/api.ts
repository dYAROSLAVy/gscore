import { baseApi } from "@/shared/redux/base-api";

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    buySubscribe: builder.mutation<{}, { token?: string; priceId?: number }>({
      query: ({ token, ...body }) => ({
        url: "payments/buy",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
  }),
});

export const { useBuySubscribeMutation } = paymentsApi;
