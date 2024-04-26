import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gscoreApi } from "@/entities/user/api/api";
import { userReducer } from "../entities/user/model/reducers";

export const store = configureStore({
  reducer: {
    [gscoreApi.reducerPath]: gscoreApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gscoreApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
