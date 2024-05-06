import { StateSchema } from "@/app/store";

export const getSubscribesSlideIndex = (state: StateSchema) =>
  state.subscribes.index;
