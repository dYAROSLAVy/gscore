import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  NewUser,
  Product,
  FormUser,
  MeResponse,
  NewPasswordSchema,
  UpdateUserSchema,
} from "./types";
import { GetSignInResponse } from "@/store/user/userSlice";

export const gscoreApi = createApi({
  reducerPath: "gscoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://internship.purrweb.site/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<Product>, void>({
      query: () => "products",
    }),
    postSingIn: builder.mutation<GetSignInResponse, FormUser>({
      query: (data) => ({
        url: "users/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    postSingUp: builder.mutation<NewUser, {}>({
      query: (data) => ({
        url: "users/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    me: builder.query<MeResponse, string>({
      query: (token) => {
        return {
          url: `users/me`,
          headers: {
            Authorization: token ? `Bearer ${token}` : ``,
          },
        };
      },
    }),
    patchUpdatePassword: builder.mutation<{}, NewPasswordSchema>({
      query: ({ token, ...body }) => ({
        url: "users/update-password",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    patchUpdatePersonalData: builder.mutation<{}, UpdateUserSchema>({
      query: ({ token, ...body }) => ({
        url: "users",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostSingInMutation,
  usePostSingUpMutation,
  useMeQuery,
  usePatchUpdatePasswordMutation,
  usePatchUpdatePersonalDataMutation
} = gscoreApi;
