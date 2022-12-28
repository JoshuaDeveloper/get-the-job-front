import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "layouts/AppLayout";
import { AiOutlineSearch } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "context/UserContext";
import { JobsProvider } from "context/JobsContext";
import SideBar from "components/Sidebar";
import JobsPage from "./JobsPage";
import { JobDetails } from "./JobDetails";
import { ApplicationProvider } from "context/ApplicationsContext";
import { YourApplications } from "./YourApplication";
import ProffesionalProfile from "pages/ProfilePage/proffesional";
import RecruiterProfile from "pages/ProfilePage/recruiter";
import { routes } from "Routes";
import { FollowsPage } from "./FollowsPage";
import { FollowsProvider } from "context/FollowContext";
import { CompanyJobsPage } from "./CompanyJobsPage";

export const iconStyle = { height: "22px", width: "22px", color: "#616161" };

const professional = routes.professional;

export const Professionals = () => {
  const { logout } = useAuth();
  return (
    <ApplicationProvider>
      <JobsProvider>
        <FollowsProvider>
          <AppLayout>
            <SideBar>
              {Object.values(professional).map((route) => (
                <SideBar.Item
                  to={route.path}
                  icon={route.icon}
                  text={route.text}
                />
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
              {Object.values(professional).map((route) => (
                <Route path={route.path} element={route.element} />
              ))}
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/applications" element={<YourApplications />} />
              <Route path="/following" element={<FollowsPage />} />
              <Route
                path="/company-jobs/:idCompany"
                element={<CompanyJobsPage />}
              />
              <Route path="/profile" element={<p>profile</p>} />
              <Route path="/logout" element={<p>logout</p>} />
            </Routes>
          </AppLayout>
        </FollowsProvider>
      </JobsProvider>
    </ApplicationProvider>
  );
};
