import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewUser, Product, User } from "./types";

export const gscoreApi = createApi({
  reducerPath: "gscoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://internship.purrweb.site/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<Product>, void>({
      query: () => "products",
    }),
    postSingIn: builder.mutation<User, {}>({
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
  }),
});

export const { useGetProductsQuery, usePostSingInMutation, usePostSingUpMutation } = gscoreApi;
