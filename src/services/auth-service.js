import { routes } from "Routes";
import { tokenKey } from "../config";
import { apiFetch } from "./api-fetch";

export const session_login = (credentials, role) => {
  return apiFetch
    .post(routes.unauthenticatedApp.loginPage.path, credentials)
    .then(({ data }) => {
      const { token, ...user } = data;
      if (user.role !== role) {
        throw Error("Access Denied");
      }
      apiFetch.defaults.headers.common[
        "Authorization"
      ] = `Token token=${token}`;
      sessionStorage.setItem(tokenKey, token);
      return user;
    })
    .catch((e) => console.log(e));
};

// export function getUser() {
//   return apiFetch("/profile");
// }

export function session_logout() {
  return apiFetch.get("/logout").catch((e) => console.log(e));
}
