import { Code } from "@/entities/codes";
import { Product } from "@/entities/products/model/types";

export interface SubscribesSchema {
  index?: string;
}

export type Subscribe = {
  codes: Code[];
  currentPeriodEnd: string;
  currentPeriodStart: string;
  id: number;
  product: Product;
  productId: number;
  status: string;
  userId: number;
};

export type ChangeProductPutParams = {
  token?: string;
  productId?: number;
  subscribeId?: number;
};
