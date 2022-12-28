import { AiOutlineFileAdd, AiOutlineSearch } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";

import JobsPage from "pages/Professionals/JobsPage";
import { YourApplications } from "pages/Professionals/YourApplication";
import ProffesionalProfile from "pages/ProfilePage/proffesional";
import RecruiterProfile from "pages/ProfilePage/recruiter";
import { PostingJobs } from "pages/Recruiters/PostingJobs";
import { LandingPage, LoginPage, RegisterPage } from "pages";
import { PostingIndex } from "pages/Recruiters/PostingIndex";
import { ShowPost } from "pages/Recruiters/ShowPost";
import { FollowsPage } from "pages/Professionals/FollowsPage";

const iconStyle = { height: "22px", width: "22px", color: "#616161" };

export const routes = {
  unauthenticatedApp: {
    landingPage: {
      path: "/",
      element: <LandingPage />,
    },
    loginPage: {
      path: "/login",
      element: <LoginPage />,
    },
    registerPage: {
      path: "/signup",
      element: <RegisterPage />,
    },
  },
  recruiter: {
    jobs_posting: {
      path: "/jobs-posting",
      icon: <BsBagDash style={iconStyle} />,
      element: <PostingIndex />,
      text: "Job posting",
    },
    new_jobs: {
      path: "/new-job",
      icon: <AiOutlineFileAdd style={iconStyle} />,
      element: <PostingJobs />,
      text: "Create New Job",
    },
    profile: {
      path: "/profile_recruiter",
      icon: <CgProfile style={iconStyle} />,
      element: <RecruiterProfile />,
      text: "Profile",
    },
  },
  professional: {
    jobs: {
      path: "/jobs",
      icon: <AiOutlineSearch style={iconStyle} />,
      element: <JobsPage />,
      text: "Find that Job",
    },
    applications: {
      path: "/applications",
      icon: <FaWpforms style={iconStyle} />,
      element: <YourApplications />,
      text: "Your Applications",
    },
    following: {
      path: "/following",
      icon: <RiFocus3Line style={iconStyle} />,
      element: <FollowsPage />,
      text: "Following",
    },
    profile: {
      path: "/profile_professional",
      icon: <CgProfile style={iconStyle} />,
      element: <ProffesionalProfile />,
      text: "Profile",
    },
  },
};
