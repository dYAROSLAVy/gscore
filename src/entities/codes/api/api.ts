import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import { baseApi } from "@/shared/redux/base-api";
import { ActivateLicensePutParams, CodeManagePutParams } from "../model/types";

export const licensesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    activateLicense: builder.mutation<void, ActivateLicensePutParams>({
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
    codeManage: builder.mutation<void, CodeManagePutParams>({
      query: ({ token, ...body }) => ({
        url: API_URL.codeManage,
        method: HTTP_METHODS.put,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Subscribes"],
    }),
  }),
});

export const { useActivateLicenseMutation, useCodeManageMutation } =
  licensesApi;
