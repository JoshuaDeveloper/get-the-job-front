import React from "react";
import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { NavLink } from "react-router-dom";

const StyledSideBarItem = styled(NavLink)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  min-height: 48px;
  align-items: center;
  padding: 0 18px;

  > p {
    ${typography.regular.itemSideBar};
    color: #373737;
    margin-left: 9.69px;
  }

  &:hover {
    background-color: #ffffff;
  }
  &.active {
    background-color: #ffffff;
  }
`;

function SideBarItem({ icon, text, ...props }) {
  return (
    <StyledSideBarItem {...props}>
      {icon}
      <p>{text}</p>
    </StyledSideBarItem>
  );
}

export default SideBarItem;
