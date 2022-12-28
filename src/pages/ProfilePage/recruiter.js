import React, { useState } from "react";
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

// const SubTitle = styled.p`
//   ${typography.regular.headline5};
//   color: ${colors.darkGray};
// `;

const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// const Text = styled.p`
  /* ${typography.regular.caption}; */
  /* color: ${colors.gray}; */
// `;
const File = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Logo = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
`;

function RecruiterProfile() {
  const { user, updateProfile } = useAuth();

  const [file, setFile] = useState(user.logo_company_url);
  const [isUploading, setIsUploading] = useState(false)
  const initialValues = {
    logo_company: user.logo_company,
    email: user.email,
    company_name: user.company_name,
    company_website: user.company_website,
    about_company: user.about_company,
  };

  console.log(initialValues);
  const recruiterInformation = [
    {
      id: 1,
      label: "COMPANY EMAIL",
      name: "email",
      type: "email",
      placeholder: "",
    },
    {
      id: 2,
      label: "COMPANY NAME",
      name: "company_name",
      type: "text",
      placeholder: "",
    },
    {
      id: 3,
      label: "COMPANY WEBSITE",
      name: "company_website",
      type: "text",
      placeholder: "",
    },
    {
      id: 4,
      label: "ABOUT THE COMPANY",
      name: "about_company",
      type: "text-area",
      placeholder: "",
    },
  ];
  const handleUpdate = (values) => {
    const formData = new FormData();
    formData.append("recruiter[cv]", values.cv);
    Object.keys(values).forEach((key)=>{
      if(key === "cv") return;
      formData.append(`recruiter[${key}]`, values[key])
    })
    updateProfile(formData, user.id);
  };
  const updateFile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
    setIsUploading(true)
  };
  return (
    <main>
      <Profile>
        <Formik onSubmit={handleUpdate} initialValues={initialValues}>
          <WrapperForm>
            <Title>Profile</Title>
            <InfoProfile>
              <File>
                <Logo>
                  {file ? (
                    <img
                      alt="Preview"
                      height="60"
                      src={isUploading ? URL.createObjectURL(file) :  file}
                    />
                  ) : null}
                </Logo>
                <FormInput
                  label="COMPANY LOGO"
                  name="logo_company"
                  caption="PNG, JPEG, IMG"
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  updateFile={updateFile}
                />
              </File>
              {recruiterInformation.map((data) => (
                <FormInput key={data.id} {...data} />
              ))}
            </InfoProfile>

            <Button
              type="submit"
              style={{ width: "fit-content", fontWeight: "500" }}
            >
              Update Profile
            </Button>
          </WrapperForm>
        </Formik>
      </Profile>
    </main>
  );
}

export default RecruiterProfile;
