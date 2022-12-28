import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { NavBar } from "components/NavBar";
import { AuthLayout } from "layouts/AuthLayout";
import { AuthNav } from "components/AuthNav";
import RegisterImage from "assets/images/register-image.png";
import { ProfessionalRegister } from "./ProfessionalRegister";
import { RecruiterRegister } from "./RecruiterRegister";
import { useState } from "react";
const Main = styled.main`
  padding-left: 220px;
  padding-top: 2rem;
  display: flex;
  position: relative;
`;
const FormContainer = styled.div`
  max-width: 631px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & h3 {
    ${typography.regular.headline3}
  }
  & h6 {
    ${typography.regular.headline6}
  }
  & form {
    & input {
      width: 360px;
    }
  }
`;
const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 120px;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RegisterPage = () => {
  const [role, setRole] = useState("professional");
  return (
    <AuthLayout>
      <NavBar />
      <Main>
        <FormContainer>
          <Group>
            <h3>Good choice!</h3>
            <h6>Create new account as..</h6>
          </Group>
          <AuthNav role={role} handleNav={setRole} />
          {role === "professional" ? (
            <ProfessionalRegister />
          ) : (
            <RecruiterRegister />
          )}
        </FormContainer>
        <ImageWrapper>
          <img src={RegisterImage} alt="" />
        </ImageWrapper>
      </Main>
    </AuthLayout>
  );
};
