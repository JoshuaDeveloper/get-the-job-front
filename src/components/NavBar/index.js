import styled from "@emotion/styled";
import React from "react";
import Logo from "assets/images/gtj-logo 1.png";
import { RiUserAddLine, RiUserReceived2Line } from "react-icons/ri";
import { Button } from "components/Button";
import { Link } from "react-router-dom";
import { routes } from "Routes";

const StyledNavBar = styled.nav`
  background-color: white;
  padding: 0.75rem 9.5rem;
  height: 64px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBarStart = styled.div`
  display: flex;
  align-items: center;
`;
const NavBarEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to={routes.unauthenticatedApp.landingPage.path}>
        <NavBarStart>
          <img src={Logo} alt="" />
        </NavBarStart>
      </Link>
      <NavBarEnd>
        <Link to={routes.unauthenticatedApp.registerPage.path}>
          <Button
            btn_type="Secondary"
            leftIcon={<RiUserAddLine size={"1.25rem"} />}
          >
            Sign up
          </Button>
        </Link>
        <Link to={routes.unauthenticatedApp.loginPage.path}>
          <Button
            btn_type="Secondary"
            leftIcon={<RiUserReceived2Line size={"1.25rem"} />}
          >
            LOGIN
          </Button>
        </Link>
      </NavBarEnd>
    </StyledNavBar>
  );
};
