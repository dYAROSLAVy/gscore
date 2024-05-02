import { baseApi } from "@/shared/redux/base-api";
import { Product } from "../types";
import { API_URL } from "@/shared/constants/api-url";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => API_URL.getProducts,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
