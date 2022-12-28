import SideBar from "components/Sidebar";
import { PostingProvider } from "context/PostingContext";
import { useAuth } from "context/UserContext";
import { AppLayout } from "layouts/AppLayout";
import { iconStyle } from "pages/Professionals";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import { routes } from "Routes";
import { ShowPost } from "./ShowPost";

const recruiter = routes.recruiter;

export const Recruiters = () => {
  const { logout } = useAuth();
  return (
    <PostingProvider>
      <AppLayout>
        <SideBar>
          {Object.values(recruiter).map((route, i) => (
            <SideBar.Item key={i} to={route.path} icon={route.icon} text={route.text} />
          ))}
          <SideBar.Logout
            icon={<BiLogOutCircle style={iconStyle} />}
            text="Logout"
            onClick={() => {
              logout();
            }}
          />
        </SideBar>
        <Routes>
          {Object.values(recruiter).map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
          ;
          <Route path="/jobs-posting/:id" element={<ShowPost />} />
        </Routes>
      </AppLayout>
    </PostingProvider>
  );
};
