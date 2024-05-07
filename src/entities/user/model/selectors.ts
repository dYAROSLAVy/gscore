import { StateSchema } from "@/app/store";

export const getIsUserAuthorized = (state: StateSchema) =>
  Boolean(state.user?.user);

export const getUserName = (state: StateSchema) => state.user?.user?.username;

export const getUserToken = (state: StateSchema) => state.user?.user?.token;
