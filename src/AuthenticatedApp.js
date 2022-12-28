import { useAuth } from "context/UserContext";
import { Professionals } from "pages/Professionals";
import { Recruiters } from "pages/Recruiters";

export const AuthenticatedApp = () => {
  const { user } = useAuth();
  return user.role === "professional" ? <Professionals /> : <Recruiters />;
};
