import axios from "axios";
import { BASE_URI } from "config";

export const apiFetch = axios.create({
  baseURL: BASE_URI,
  headers: {
    post: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  },
});
