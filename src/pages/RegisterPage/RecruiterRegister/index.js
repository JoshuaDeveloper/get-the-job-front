import { Formik } from "formik";
import React, { useState } from "react";
import { CompanyForm } from "../components/CompanyForm";
import { LoginForm } from "../components/LoginForm";
import { StatusList } from "../components/StatusList";
import * as Yup from "yup";
import { FormContainer } from "components/FormContainer";
import { useAuth } from "context/UserContext";
const forwardStep = (state, setState) => {
  let nextIndex = -1;
  let ncurrent = state.current;
  const nlist = state.list.map((elem, i) => {
    if (i === nextIndex) {
      ncurrent = elem.text;
      return { ...elem, status: "progress" };
    }

    if (elem.status === "progress") {
      nextIndex = i + 1;
      return { ...elem, status: "done" };
    } else return elem;
  });
  setState({ current: ncurrent, list: nlist });
};
const INITIAL_STATE = {
  current: "Login",
  list: [
    {
      text: "Login",
      status: "progress",
    },
    {
      text: "Company",
      status: "pending",
    },
  ],
};

export const RecruiterRegister = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { signup } = useAuth();
  const nextStep = () => {
    forwardStep(state, setState);
  };
  const isActive = (step) => {
    return step === state.current;
  };
  const handleSubmit = (values) => {
    console.log(values);
    if (state.current === "Company") {
      signup(values, "recruiters");
    } else {
      nextStep();
    }
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
        confirm_password: "",
        website: "",
        about: "",
        logo: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address.")
          .required("Email is required."),
        password: Yup.string().required("Password is required"),
        confirm_password: Yup.string()
          .required("Confirm password is required")
          .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
        website: Yup.string().matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        ),
        about: Yup.string(),
      })}
    >
      <FormContainer>
        <StatusList list={state.list} />
        <LoginForm active={isActive("Login")} />
        <CompanyForm active={isActive("Company")} />
      </FormContainer>
    </Formik>
  );
};
