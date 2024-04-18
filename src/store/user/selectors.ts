import { gscoreApi } from "@/api/api";
import { UserSchema } from "@/api/types";

export type StateSchema = {
  user: UserSchema;
};

export const getIsUserAuthorized = (state: StateSchema) =>
  Boolean(state.user.user);

export const getMeData = gscoreApi.endpoints.me.initiate;

export const getUserName = (state: StateSchema) => state.user.user?.username;

export const getUserToken = (state: StateSchema) => state.user.user?.token;
