import { apiFetch } from "./api-fetch";

export const getJobs = () => {
  return apiFetch.get("/jobs")
};

export const getCategories = () => {
  return apiFetch.get("/categories")
};
