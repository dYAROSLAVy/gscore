import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  tagTypes: ["Subscribes", "User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://internship.purrweb.site/api/",
  }),
  endpoints: () => ({}),
});
