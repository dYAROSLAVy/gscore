import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SubscribesSchema } from "@/entities/subscribes/model/types";

const initialState: SubscribesSchema = {
  index: "",
};

export const subscribesSlice = createSlice({
  name: "subscribesSlideIndex",
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<string>) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = subscribesSlice.actions;
