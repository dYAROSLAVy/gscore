import { baseApi } from "@/shared/redux/base-api";
import { API_URL } from "@/shared/constants/api-url";
import { Product } from "@/entities/products/model/types";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => API_URL.getProducts,
    }),
  }),
});

export const {
  useGetProductsQuery,
  util: { getRunningQueriesThunk: productThunk },
} = productsApi;

export const { getProducts } = productsApi.endpoints;
