import { apiFetch } from "./api-fetch";

export const createCategory = (categoryData) => {
  return apiFetch.post("/categories", categoryData);
};
