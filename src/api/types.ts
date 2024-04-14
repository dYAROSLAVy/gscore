export type Price = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};

export type Product = {
  id: number;
  sitesCount: number;
  name: string;
  prices: Price[];
};

export type User = {
  email: string;
  password: string;
};

export type NewUser = {
  username: string;
} & User;
