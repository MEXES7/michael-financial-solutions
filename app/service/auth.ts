import { api } from "./api";

export const register = (data: any) =>
  api("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const login = (data: any) =>
  api("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const logout = () =>
  api("/api/auth/logout", {
    method: "POST",
  });

export const getMe = () => api("/api/auth/me");
