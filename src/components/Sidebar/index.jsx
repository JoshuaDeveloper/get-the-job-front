import React from "react";
import styled from "@emotion/styled";
import { typography } from "assets/typography";

import { AiOutlineSearch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { RiFocus3Line } from "react-icons/ri";
import Logo from "assets/images/gtj-logo 1.png";
import SideBarItem from "components/SidebarItems";
import SideBarLogout from "components/SidebarLogout";

const StyledSideBar = styled.div`
  max-width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e1e2e1;
`;

const HeaderSideBar = styled.div`
  margin: 32px 16px;
`;

const SideBar = ({ children }) => {
  return (
    <StyledSideBar>
      <HeaderSideBar>
        <img src={Logo} alt="logo" />
      </HeaderSideBar>
      {children}
      {/* {SideBarList.map((item, index) => {
        return <SideBarItem key={index} icon={item.icon} text={item.text} />;
      })} */}
    </StyledSideBar>
  );
};
SideBar.Item = SideBarItem;
SideBar.Logout = SideBarLogout;
export default SideBar;
