import { Button } from "components/Button";
import { Formik } from "formik";
import * as Styled from "./styles";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { FormInput } from "components/FormInput";
import { useAuth } from "context/UserContext";
import { useApplication } from "context/ApplicationsContext";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "components/FormContainer";
import { RadioButton } from "components/RadioButton";
import { typography } from "assets/typography";

const ContainerCheckoxCv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & p {
    ${typography.regular.overline}
    text-transform: uppercase;
  }
`;
const ContainerOptions = styled.div`
  display: flex;
  gap: 12px;
`;
export const ApplyJob = ({ job }) => {
  const [usingCurrentCV, setUsingCurrentCV] = useState(true);
  const { addAplication } = useApplication();
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <Formik
      onSubmit={(values) => {
        addAplication({ ...values, job_id: job.id });
        navigate("/applications");
      }}
      initialValues={{
        professional_experience: user.professional_experience,
        comment_application: "",
      }}
    >
      <FormContainer>
        <Styled.ApplicationTitle>
          Complete your application
        </Styled.ApplicationTitle>
        <ContainerCheckoxCv>
          <p>Send your cv updated</p>
          <ContainerOptions>
            <RadioButton
              onChange={() => setUsingCurrentCV(true)}
              name="checkCv"
              defaultChecked
              label="Use current CV"
            />
            <RadioButton
              onChange={() => setUsingCurrentCV(false)}
              name="checkCv"
              label="Upload new CV"
            />
          </ContainerOptions>
        </ContainerCheckoxCv>
        {!usingCurrentCV && <FormInput name="cv" type="file" caption="Only PDF. Max size 5MB" />}

        <FormInput
          label="Professional experience (taken from your profile)"
          name="professional_experience"
          type="text-area"
          placeholder=""
        />
        <FormInput
          label="Why are you interested in working at The company name SA"
          name="comment_application"
          type="text-area"
          placeholder=""
          caption="Between 50 and 1000 characters"
        />
        <div style={{ alignSelf: "center" }}>
          <Button type="submit" size="Large">
            Send Application
          </Button>
        </div>
      </FormContainer>
    </Formik>
  );
};
