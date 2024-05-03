export type StateSchema = {
  index: {
    index: string;
  };
};

export const getSubscribesSlideIndex = (state: StateSchema) =>
  state.index.index;
