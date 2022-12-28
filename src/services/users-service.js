import { tokenKey } from "../config";
import { apiFetch } from "./api-fetch";

export function createUser(userData, role) {
  return apiFetch.post(`/${role}`, userData).then(({ data }) => {
    const { token, ...user } = data;
    apiFetch.defaults.headers.common["Authorization"] = `Token token=${token}`;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}

export function getUser() {
  const token = sessionStorage.getItem(tokenKey);
  if (!token) {
    // throw new Error("Access Denied");
    // return;
  }
  apiFetch.defaults.headers.common["Authorization"] = `Token token=${token}`;

  const role = localStorage.getItem("role");
  return apiFetch
    .get(`/profile_${role}`)
    .then(({ data }) => {
      const { token, ...user } = data;
      // sessionStorage.setItem(tokenKey, token);
      return user;
    })
    .catch((e) => {});
}

export function updateUser(userData, user_id) {
  const role = localStorage.getItem("role");
  console.log(role);
  console.log(`/${role}s/${user_id}`);
  console.log(userData);
  return apiFetch
    .patch(`/${role}s/${user_id}`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: (data) => {
        return data; // thats enough
      },
    });
}
