import { Formik } from "formik";
import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { PersonalForm } from "../components/PersonalForm";
import { ProfessionalForm } from "../components/ProfessionalForm";
import { StatusList } from "../components/StatusList";
import { FormContainer } from "components/FormContainer";
import * as Yup from "yup";
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

const returnStep = (state, setState) => {
  let nextIndex = -1;
  let ncurrent = state.current;

  const nlist = state.list.reverse().map((elem, i) => {
    if (i === nextIndex) {
      ncurrent = elem.text;
      return { ...elem, status: "progress" };
    }

    if (elem.status === "progress") {
      nextIndex = i + 1;
      return { ...elem, status: "pending" };
    } else return elem;
  });
  setState({ current: ncurrent, list: nlist.reverse() });
};
const INITIAL_STATE = {
  current: "Login",
  list: [
    {
      text: "Login",
      status: "progress",
    },
    {
      text: "Personal",
      status: "pending",
    },
    {
      text: "Professional",
      status: "pending",
    },
  ],
};
export const ProfessionalRegister = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const {signup} = useAuth();
  const nextStep = () => {
    forwardStep(state, setState);
  };
  const prevStep = () => {
    returnStep(state, setState);
  };
  const isActive = (step) => {
    return step === state.current;
  };
  const handleSubmit = (values) => {
    if (state.current === "Professional") {
      signup(values, "professionals");
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
        name: "",
        phone: "",
        birthdate: "",
        linkedin_url: "",
        user_title: "",
        experience: "",
        education: "",
        cv: null,
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
        name: Yup.string(),
        phone: Yup.number(),
        birthdate: Yup.date(),
        linkedin_url: Yup.string().matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        ),
        title: Yup.string(),
        professional_experience: Yup.string(),
        education: Yup.string(),
      })}
    >
      <FormContainer>
        <StatusList list={state.list} />
        <LoginForm active={isActive("Login")} />
        <PersonalForm active={isActive("Personal")} />
        <ProfessionalForm
          active={isActive("Professional")}
          prevStep={prevStep}
        />
      </FormContainer>
    </Formik>
  );
};
