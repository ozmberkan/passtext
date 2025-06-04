import { api } from "~/axios/axios";

export const login = async (values) => {
  return await api.post("api/auth/login", values);
};

export const register = async (values) => {
  return await api.post("api/auth/register", values);
};

export const logout = async () => {
  return await api.get("api/auth/logout");
};

export const me = async () => {
  return await api.get("api/auth/me");
};
