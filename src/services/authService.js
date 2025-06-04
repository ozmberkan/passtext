import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

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
