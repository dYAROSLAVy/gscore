import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isHydrateAction } from "./utils";

export const baseApi = createApi({
  tagTypes: ["Subscribes", "User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://internship.purrweb.site/api/",
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
