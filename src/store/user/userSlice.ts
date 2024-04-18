import { gscoreApi } from "@/api/api";
import { MeResponse, UserSchema } from "@/api/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserSchema = {
  user: undefined,
};

export type GetSignInResponse = {
  token: string;
  user: {
    username: string;
    id: number;
    email: string;
  };
};

export const adaptUser = (data?: GetSignInResponse): UserSchema["user"] => {
  if (!data) return;

  return {
    email: data?.user?.email,
    id: data?.user?.id,
    token: data?.token,
    username: data?.user?.username,
  };
};

export const adaptMe = (
  data: MeResponse | undefined,
  token: string
): UserSchema["user"] => {
  if (!data) return;

  return {
    email: data.email,
    id: data.id,
    username: data.username,
    token,
  };
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        gscoreApi.endpoints.postSingIn.matchFulfilled,
        (state, action) => {
          const adaptedUser = adaptUser(action.payload);

          state.user = adaptedUser;

          if (typeof window !== "undefined" && adaptedUser) {
            window.localStorage.setItem("user-token", adaptedUser.token);
          }
        }
      )
      .addMatcher(gscoreApi.endpoints.me.matchFulfilled, (state, action) => {
        let token = ``;

        if (typeof window !== "undefined") {
          token = window.localStorage.getItem("user-token") ?? ``;
        }

        const adaptedUser = adaptMe(action.payload, token);

        state.user = adaptedUser;
      });
  },
});
