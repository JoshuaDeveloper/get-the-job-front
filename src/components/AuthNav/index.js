import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import React from "react";

const StyledAuthNav = styled.nav`
  display: flex;
  gap: 0.5rem;
`;
const AuthNavItem = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  ${typography.regular.button}
  padding: 0px 4px 6px 4px;
  &:hover {
    color: ${colors.pink};
    border-bottom: 2px solid ${colors.pink};
  }
  ${(props) =>
    props.active
      ? `
      color: ${colors.pink};
      border-bottom: 2px solid ${colors.pink};
      `:`
      color: ${colors.lightGray};
      border-bottom: 2px solid ${colors.lightGray};`}
`;

export const AuthNav = ({ role, handleNav }) => {
  return (
    <StyledAuthNav>
      <AuthNavItem
        active={role === "professional"}
        onClick={() => handleNav("professional")}
      >
        Professional
      </AuthNavItem>
      <AuthNavItem
        active={role === "recruiter"}
        onClick={() => handleNav("recruiter")}
      >
        Recruiter
      </AuthNavItem>
    </StyledAuthNav>
  );
};
