import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  loaded: false,
  setUser: (data) => set({ user: data }),
  reset: () => set({ user: null }),
  setLoaded: (value) => set({ loaded: value }),
}));
