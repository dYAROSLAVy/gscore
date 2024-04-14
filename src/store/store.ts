import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gscoreApi } from "@/api/api";

export const store = configureStore({
  reducer: {
    [gscoreApi.reducerPath]: gscoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gscoreApi.middleware),
});

setupListeners(store.dispatch);
