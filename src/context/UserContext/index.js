import { useContext } from "react";
import { UserContext } from "./UserContext";

export { UserProvider } from "./UserProvider";

export const useAuth = () => useContext(UserContext);
