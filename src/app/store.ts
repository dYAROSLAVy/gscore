import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "../entities/user/model/reducers";
import { baseApi } from "@/shared/redux/base-api";
import { subscribesReducer } from "@/entities/subscribes/model/reducers";
import { UserSchema } from "@/entities/types";
import { SubscribesSchema } from "@/entities/subscribes/model/types";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    subscribes: subscribesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type StateSchema = {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
  user: UserSchema;
  subscribes: SubscribesSchema;
};
