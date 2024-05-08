import { GetSignInResponse } from "./userSlice";

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
  user: User | null;
  token: string | null;
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

export const adaptUser = (data?: GetSignInResponse): UserSchema["user"] => {
  if (!data) return null;

  return {
    email: data?.user?.email,
    id: data?.user?.id,
    token: data?.token,
    username: data?.user?.username,
  };
};

export const adaptMe = (
  data: MeResponse | undefined,
  token: string
): UserSchema["user"] => {
  if (!data) return null;

  return {
    email: data.email,
    id: data.id,
    username: data.username,
    token,
  };
};
