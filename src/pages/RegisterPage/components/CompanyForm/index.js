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
export const CompanyForm = ({ nextStep, active }) => {
  return (
    <Wrapper active={active}>
      <Overline>
        You can complete this information later but we reccomend you to do it
        now
      </Overline>
      <FormInput
        label="Company Website"
        name="website"
        type="url"
        placeholder="https://www.mycompany.sa"
      />

      <FormInput
        label="About the company"
        name="about"
        type="text-area"
        placeholder="My Company SA has the vision to change thw way how..."
        caption="Between 100 and 2000 characters"
      />
      <FormInput
        label="Upload the company logo"
        name="logo"
        caption="Only PDF. Max size 5MB"
        accept=".pdf"
        type="file"
      />
      <Control>
        <Button type="submit" btn_type="Secondary">
          SKIP THIS!
        </Button>
        <Button type="submit" rightIcon={<FiChevronRight />}>
          Finish
        </Button>
      </Control>
    </Wrapper>
  );
};
