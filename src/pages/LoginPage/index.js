import styled from "@emotion/styled";
import { FormInput } from "components/FormInput";
import { NavBar } from "components/NavBar";
import { AuthLayout } from "layouts/AuthLayout";
import React, { useState } from "react";
import { typography } from "assets/typography/";
import LoginImage from "assets/images/login-image.png";
import { AuthNav } from "components/AuthNav";
import { Button } from "components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "context/UserContext";
const Main = styled.main`
  display: flex;
  gap: 83px;
  padding: 132px 120px 137px 318px;
`;
const FormContainer = styled.div`
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & button {
      align-self: flex-end;
      /* width: 80px; */
    }
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const LoginPage = () => {
  const { login } = useAuth();
  const [role, setRole] = useState("professional");
  return (
    <AuthLayout>
      <NavBar />
      <Main>
        <FormContainer>
          <Group>
            <h3>Welcome back</h3>
            <h6>Login to you account as...</h6>
          </Group>
          <Formik
            onSubmit={(credentials) => {
              login(credentials, role);
            }}
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
          >
            <Form>
              <AuthNav role={role} handleNav={setRole} />
              <FormInput
                label="EMAIL"
                name="email"
                type="email"
                placeholder="some.user@mail.com"
              />
              <FormInput
                label="password"
                name="password"
                type="password"
                placeholder="********"
              />
              <Button type="submit">Login</Button>
            </Form>
          </Formik>
        </FormContainer>
        <div>
          <img src={LoginImage} alt="" />
        </div>
      </Main>
    </AuthLayout>
  );
};
