import styled from "@emotion/styled";
import { Button } from "components/Button";
import { FormInput } from "components/FormInput";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Wrapper } from "../Wrapper";

const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = ({ nextStep, active }) => {
  return (
    <Wrapper active={active}>
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
      <FormInput
        label="password confirmation"
        name="confirm_password"
        type="password"
        placeholder="********"
      />
      <Control>
        <Button
          type="submit"
          rightIcon={<FiChevronRight />}
        >
          Next
        </Button>
      </Control>
    </Wrapper>
  );
};
