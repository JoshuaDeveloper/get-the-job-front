import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "Routes";

const unauthenticatedApp = routes.unauthenticatedApp;
export const UnauthenticatedApp = () => {
  return (
    <>
      <Routes>
        {Object.values(unauthenticatedApp).map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
