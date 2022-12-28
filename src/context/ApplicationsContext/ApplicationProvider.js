import { useAuth } from "context/UserContext";
import React, { useEffect, useReducer } from "react";
import { createApplication, getApplications } from "services/application-service";
import { ApplicationContext } from "./ApplicationContext";
import { applicationReducer } from "./applicationReducer";

export const ApplicationProvider = ({ children }) => {
  const [applications, dispatch] = useReducer(applicationReducer, []);
  const { user } = useAuth();
  useEffect(() => {
    getApplications(user.id).then(({ data }) => {
      dispatch({ type: "setApplications", payload: data });
    });
  }, [user.id]);
  const addAplication = (application)=>{
    createApplication(user.id, application).then(({data})=>{
      
      dispatch({type: "addApplication", payload: data})
    })
  }

  return <ApplicationContext.Provider value={{applications, addAplication}}>{children}</ApplicationContext.Provider>;
};
