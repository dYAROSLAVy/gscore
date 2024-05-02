import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import { baseApi } from "@/shared/redux/base-api";

export const licensesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    activateLicense: builder.mutation<{}, { token?: string; code?: string }>({
      query: ({ token, ...body }) => ({
        url: API_URL.codeActivate,
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

export const { useActivateLicenseMutation } = licensesApi;
