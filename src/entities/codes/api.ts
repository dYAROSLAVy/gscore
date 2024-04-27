import { baseApi } from "@/shared/redux/base-api";

export const licensesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    activateLicense: builder.mutation<{}, { token?: string; code?: string }>({
      query: ({ token, ...body }) => ({
        url: "code/activate",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
  }),
});

export const { useActivateLicenseMutation } = licensesApi;
