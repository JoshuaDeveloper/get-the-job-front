import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "Routes";
import { apiFetch } from "services/api-fetch";
import { session_login, session_logout } from "services/auth-service";
import { createUser, getUser, updateUser } from "services/users-service";
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, null);
  const navigate = useNavigate();
  useEffect(() => {
    getUser()
      .then((user) => {
        dispatch({ type: "setUser", payload: user });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const login = (credentials, role) => {
    session_login(credentials, role)
      .then((user) => {
        dispatch({ type: "setUser", payload: user });
        localStorage.setItem("role", user.role);
        if (user.role === "professional") {
          navigate("/jobs");
        } else {
          navigate("/jobs-posting");
        }
      })
      .catch((e) => console.log(e.message));
  };

  const updateProfile = (values, user_id) => {
    updateUser(values, user_id)
      .then(({ data }) => {
        dispatch({ type: "setUser", payload: data });
        // console.log(user)
        if (data.role === "professional") {
          navigate("/profile_professional");
        } else {
          navigate("/profile_recruiter");
        }
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    session_logout()
      .then(() => {
        apiFetch.defaults.headers.common["Authorization"] = null;
        dispatch({ type: "removeUser" });
        navigate(routes.unauthenticatedApp.landingPage.path);
      })
      .catch((e) => console.log(e.message));
  };

  const signup = (userData, role) => {
    console.log(userData, role);
    createUser(userData, role).then((user) => {
      dispatch({ type: "setUser", payload: user });
      navigate("/");
    });
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, signup, updateProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
