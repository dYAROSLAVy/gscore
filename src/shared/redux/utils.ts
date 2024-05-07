import { StateSchema } from "@/app/store";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const isFetchBaseQueryError = (
  error: unknown
): error is { data: { message: string } } => {
  return typeof error === "object" && error != null && "status" in error;
};

export const isHydrateAction = (
  action: Action
): action is PayloadAction<StateSchema> => {
  return action.type === HYDRATE;
};
