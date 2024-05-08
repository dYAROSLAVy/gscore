import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userApi } from "../api/api";
import { adaptMe, adaptUser, UserSchema } from "./types";
import { HYDRATE } from "next-redux-wrapper";
import { StateSchema } from "@/app/store";

const initialState: UserSchema = {
  user: null,
  token: null,
};

export type GetSignInResponse = {
  token: string;
  user: {
    username: string;
    id: number;
    email: string;
  };
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ¯\_(ツ)_/¯ тип для этого не так просто найти и слишком много времени занимает,
      // потому пришлось в лоб прописать ему PayloadAction<StateSchema> и заигнорить
      // @ts-ignore
      .addCase(HYDRATE, (state, action: PayloadAction<StateSchema>) => {
        return {
          ...state,
          ...action.payload.user,
        };
      })
      .addMatcher(userApi.endpoints.singIn.matchFulfilled, (state, action) => {
        const adaptedUser = adaptUser(action.payload);

        state.user = adaptedUser;

        if (typeof window !== "undefined" && adaptedUser) {
          window.localStorage.setItem("user-token", adaptedUser.token);
          document.cookie = `user-token=${adaptedUser.token}`;
        }
      })
      .addMatcher(userApi.endpoints.me.matchFulfilled, (state, action) => {
        let token = state.token ?? ``;

        if (typeof window !== "undefined") {
          token = window.localStorage.getItem("user-token") ?? ``;
        }

        const adaptedUser = adaptMe(action.payload, token);

        state.user = adaptedUser;
      });
  },
});

export const { setToken } = userSlice.actions;
