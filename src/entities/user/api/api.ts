import { baseApi } from "@/shared/redux/base-api";
import { GetSignInResponse } from "../model/userSlice";
import { API_URL } from "@/shared/constants/api-url";
import { HTTP_METHODS } from "@/shared/constants/http-methods";
import {
  FormUser,
  MeResponse,
  NewPasswordSchema,
  NewUser,
  UpdateUserSchema,
} from "@/entities/user/model/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<NewUser, void>({
      query: (body) => ({
        url: API_URL.signUp,
        method: HTTP_METHODS.post,
        body,
      }),
    }),
    singIn: builder.mutation<GetSignInResponse, FormUser>({
      query: (data) => ({
        url: API_URL.singIn,
        method: HTTP_METHODS.post,
        body: data,
      }),
    }),
    me: builder.query<MeResponse, string>({
      query: (token) => {
        return {
          url: API_URL.me,
          headers: {
            Authorization: token ? `Bearer ${token}` : ``,
          },
        };
      },
      providesTags: ["User"],
    }),
    updatePassword: builder.mutation<void, NewPasswordSchema>({
      query: ({ token, ...body }) => ({
        url: API_URL.updatePassword,
        method: HTTP_METHODS.patch,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    updatePersonalData: builder.mutation<void, UpdateUserSchema>({
      query: ({ token, ...body }) => ({
        url: API_URL.updatePersonalData,
        method: HTTP_METHODS.patch,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSingInMutation,
  useMeQuery,
  useUpdatePasswordMutation,
  useUpdatePersonalDataMutation,
  util: {
    getRunningQueriesThunk: getUserRunningQueriesThunk,
  }
} = userApi;

export const getMeData = userApi.endpoints.me.initiate;
