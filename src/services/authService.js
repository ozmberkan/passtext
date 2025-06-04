import axios from "axios";

axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const login = async (values) => {
  return await axios.get("/auth/login", values);
};

export const register = async (values) => {
  return await axios.post("/auth/register", values);
};

export const logout = async () => {
  return await axios.get("/auth/logout");
};
