import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { Button } from "components/Button";
import { FormInput } from "components/FormInput";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Wrapper } from "../Wrapper";
const Overline = styled.p`
  text-transform: uppercase;
  ${typography.regular.overline}
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 394px;
  gap: 1rem;
`;
export const ProfessionalForm = ({ prevStep, active, addInfo, send }) => {
  return (
    <Wrapper active={active}>
      <Overline>
        You can complete this information later but we reccomend you to do it
        now
      </Overline>
      <FormInput
        label="TITLE"
        name="title"
        type="text"
        placeholder="Mechanical administrator..."
      />
      <FormInput
        label="Professional Experience"
        name="professional_experience"
        type="text-area"
        placeholder="Worked 6 years in a bitcoin farm until I decided to change my life...."
        caption="Between 300 and 2000 characters"
      />
      <FormInput
        label="Education"
        name="education"
        type="text-area"
        placeholder="Major in life experiences with a PHD in procrastination..."
        caption="Between 100 and 2000 characters"
      />
      <FormInput
        label="Upload/Update your CV"
        name="cv"
        type="file"
        accept=".pdf"
        // placeholder="Major in life experiences with a PHD in procrastination..."
        caption="Only PDF. Max size 5MB"
      />
      <Control>
        <Button
          onClick={(e) => {
            e.preventDefault();
            prevStep();
          }}
          leftIcon={<FiChevronLeft />}
        >
          Previous
        </Button>
        <Button type="submit" btn_type="Secondary">
          Skip this!
        </Button>
        <Button type="submit" rightIcon={<FiChevronRight />}>
          Finish
        </Button>
      </Control>
    </Wrapper>
  );
};
