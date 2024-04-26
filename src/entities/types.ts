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

export type FormUser = {
  email: string;
  password: string;
};

export type NewUser = {
  username: string;
} & FormUser;

export type MeResponse = {
  username: string;
  id: number;
  email: string;
};

export type User = {
  email: string;
  id: number;
  username: string;
  token: string;
};

export type UserSchema = {
  user?: User;
};

export type NewPassword = {
  currentPassword: string;
  newPassword: string;
};

export type NewPasswordSchema = {
  token?: string;
} & NewPassword;

export type UpdateUserSchema = {
  email?: string;
  username?: string;
  token?: string;
};

export type Code = {
  code: string;
  id: number;
  status: string;
  origin: string;
};

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
