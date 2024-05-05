import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SubscribesSlideIndexState = {
  index: string | undefined;
};

const initialState: SubscribesSlideIndexState = {
  index: "",
};

export const subscribesSlice = createSlice({
  name: "subscribesSlideIndex",
  initialState,
  reducers: {
    addIndex: (state, action: PayloadAction<string>) => {
      state.index = action.payload;
    },
  },
});

export const { addIndex } = subscribesSlice.actions;
