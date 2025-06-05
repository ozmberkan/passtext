import { api } from "~/axios/axios";

export const getAllKeys = async () => {
  return await api.get("api/keys");
};

export const getById = async (id) => {
  return await api.get(`api/keys/${id}`);
};

export const createKey = async (values) => {
  return await api.post("api/keys", values);
};

export const deleteKey = async (id) => {
  return await api.delete(`api/keys/${id}`);
};

export const updateKey = async (id, values) => {
  return await api.put(`api/keys/${id}`, values);
};
