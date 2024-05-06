import { UserSchema } from "@/entities/types";
import { userApi } from "../api/api";
import { StateSchema } from "@/app/store";

export const getIsUserAuthorized = (state: StateSchema) =>
  Boolean(state.user.user);

export const getMeData = userApi.endpoints.me.initiate;

export const getUserName = (state: StateSchema) => state.user.user?.username;

export const getUserToken = (state: StateSchema) => state.user.user?.token;
