import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/shared/redux/base-api";
import { createWrapper } from "next-redux-wrapper";
import { userReducer, UserSchema } from "@/entities/user";
import { subscribesReducer, SubscribesSchema } from "@/entities/subscribes";

export const makeStore = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      user: userReducer,
      subscribes: subscribesReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];

export type StateSchema = {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
  user: UserSchema;
  subscribes: SubscribesSchema;
};

export const wrapper = createWrapper<AppStore>(makeStore);
