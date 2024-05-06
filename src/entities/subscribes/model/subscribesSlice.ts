import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SubscribesSchema } from "./types";


const initialState: SubscribesSchema = {
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
