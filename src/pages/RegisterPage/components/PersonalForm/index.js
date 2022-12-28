import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { Button } from "components/Button";
import { FormInput } from "components/FormInput";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Wrapper } from "../Wrapper";
const Overline = styled.p`
  text-transform: uppercase;
  ${typography.regular.overline}
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const PersonalForm = ({ nextStep, active, addInfo }) => {
  return (
    <Wrapper active={active}>
      <Overline>
        You can complete this information later but we reccomend you to do it
        now
      </Overline>
      <FormInput label="Name" name="name" type="text" placeholder="John Doe" />
      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        placeholder="+XXXXXXXXX"
        caption="+[country code][number]"
      />

      <FormInput
        label="Birthdate"
        name="birthdate"
        type="date"
        placeholder="Pick a date"
      />
      <FormInput
        label="LINKEDIN URL"
        name="linkedin_url"
        type="url"
        placeholder="https://www.linkedin.com/in/username"
      />
      <Control>
        <Button type="submit" btn_type="Secondary">
          SKIP THIS!
        </Button>
        <Button rightIcon={<FiChevronRight />} type="submit">
          Next
        </Button>
      </Control>
    </Wrapper>
  );
};
