import {
  FormUser,
  MeResponse,
  NewPasswordSchema,
  NewUser,
  UpdateUserSchema,
} from "@/entities/types";
import { baseApi } from "@/shared/redux/base-api";
import { GetSignInResponse } from "../model/userSlice";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<NewUser, {}>({
      query: (body) => ({
        url: "users/sign-up",
        method: "POST",
        body,
      }),
    }),
    singIn: builder.mutation<GetSignInResponse, FormUser>({
      query: (data) => ({
        url: "users/sign-in",
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
    updatePassword: builder.mutation<{}, NewPasswordSchema>({
      query: ({ token, ...body }) => ({
        url: "users/update-password",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    updatePersonalData: builder.mutation<{}, UpdateUserSchema>({
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

export const { useSignUpMutation, useSingInMutation, useMeQuery, useUpdatePasswordMutation, useUpdatePersonalDataMutation } = userApi;
