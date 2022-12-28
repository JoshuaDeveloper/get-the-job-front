import React, {  } from "react";
import { Form, Formik } from "formik";
import { FormInput } from "components/FormInput";
import { Button } from "components/Button";
import { colors } from "assets/colors";
import styled from "@emotion/styled";
import { fonts, typography } from "assets/typography";
import { useAuth } from "context/UserContext";

const Profile = styled.div`
  & * {
    font-family: ${fonts.secondary};
  }
`;
const WrapperForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.p`
  ${typography.regular.headline4};
  color: ${colors.darkGray};
`;

const SubTitle = styled.p`
  ${typography.regular.headline5};
  color: ${colors.darkGray};
`;

const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Text = styled.p`
  ${typography.regular.caption};
  color: ${colors.gray};
`;

function ProffesionalProfile() {
  const { user, updateProfile } = useAuth();
  const initialValues = {
    email: user.email,
    name: user.name,
    phone: user.phone,
    birthdate: user.birthdate,
    linkedin_url: user.linkedin_url,
    title: user.title,
    professional_experience: user.professional_experience,
    education: user.education,
    cv: null,
    job_category: user.job_category,
  };
  const personalInformation = [
    {
      id: 123,
      label: "job_category",
      name: "job_category",
      type: "select",
      placeholder: "",
      options: ["Frontend", "Backend", "Fullstack"],
    },
    { id: 1, label: "EMAIL", name: "email", type: "email", placeholder: "" },
    { id: 2, label: "NAME", name: "name", type: "text", placeholder: "" },
    { id: 3, label: "PHONE", name: "phone", type: "text", placeholder: "" },
    {
      id: 4,
      label: "BIRTHDATE",
      name: "birthdate",
      type: "date",
      placeholder: "",
    },
    {
      id: 5,
      label: "LINKEDIN",
      name: "linkedin_url",
      type: "text",
      placeholder: "",
    },
  ];
  const professionalInformation = [
    { id: 6, label: "Title", name: "title", type: "text", placeholder: "" },
    {
      id: 7,
      label: "Professional Experience",
      name: "professional_experience",
      type: "text-area",
      placeholder: "",
    },
    {
      id: 8,
      label: "Education",
      name: "education",
      type: "text-area",
      placeholder: "",
    },
    {
      id: 9,
      label: "UPLOAD/UPDATE YOUR CV",
      name: "cv",
      type: "file",
      caption: "Only PDF. Max size 5MB",
      accept: ".pdf",
    },
  ];

  const handleUpdate = (values) => {
    const formData = new FormData();
    console.log(values.cv)
    values.cv && formData.append("professional[cv]", values.cv);
    Object.keys(values).forEach((key)=>{
      if(key === "cv") return;
      formData.append(`professional[${key}]`, values[key])
    })
    updateProfile(formData, user.id);
  };

  return (
    <main>
      <Profile>
        <Formik onSubmit={handleUpdate} initialValues={initialValues}>
          {({ values }) => (
            <WrapperForm>
              <Title>Profile</Title>
              <InfoProfile>
                <SubTitle>Personal information</SubTitle>
                {personalInformation.map((data) => (
                  <FormInput key={data.id} {...data} values={values} />
                ))}
              </InfoProfile>
              <InfoProfile>
                <SubTitle>Professional information</SubTitle>
                <Text>
                  Changes made here will be reflected in your future
                  applications
                </Text>
                {professionalInformation.map((data) => (
                  <FormInput key={data.id} {...data} />
                ))}
              </InfoProfile>
              <Button
                type="submit"
                style={{ width: "fit-content", fontWeight: "500" }}
              >
                Save Changes
              </Button>
            </WrapperForm>
          )}
        </Formik>
      </Profile>
    </main>
  );
}

export default ProffesionalProfile;
