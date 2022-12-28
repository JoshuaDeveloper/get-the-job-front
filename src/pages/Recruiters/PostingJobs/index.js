import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { fonts, typography } from "assets/typography";
import { Button } from "components/Button";
import { FormInput } from "components/FormInput";
import { usePosting } from "context/PostingContext";
import { useAuth } from "context/UserContext";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { createCategory } from "services/categories_services";
import { postJob } from "services/posting-service";

const NewJobForm = styled.div`
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

const InfoPostingJob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${({ size }) => (size ? size : "100%")};
`;

const SubTitle = styled.p`
  ${typography.regular.headline5};
  color: ${colors.darkGray};
`;

export const PostingJobs = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPost, categories, addCategory } = usePosting();

  const initialValues = {
    title: "",
    category: "",
    type_job: "",
    about: "",
    mandatory_requirements: "",
    optional_requirements: "",
  };

  const mainInformation = [
    {
      id: 1,
      label: "JOB TITLE",
      name: "title",
      type: "text",
      placeholder: "Software engineer",
    },
    {
      id: 2,
      label: "JOB CATEGORY",
      name: "category",
      type: "select",
      options: categories.map((cat) => cat.name),
      placeholder: "",
    },
    {
      id: 3,
      label: "TYPE",
      name: "type_job",
      type: "select",
      options: ["part_time", "full_time", "hybrid"],
      placeholder: "",
    },
  ];

  const additionalInformation = [
    {
      id: 4,
      label: "ABOUT THE JOB POSITION",
      name: "about",
      type: "text-area",
      placeholder:
        "Describe the main functions and characteristics of your job position",
    },
    {
      id: 5,
      label: "MANDATORY REQUIREMENTS",
      name: "mandatory_requirements",
      type: "text-area",
      placeholder: "List each mandatory requirement in a new line",
    },
    {
      id: 6,
      label: "OPTIONAL REQUIREMENTS",
      name: "optional_requirements",
      type: "text-area",
      placeholder: "List each optional requirement in a new line",
    },
  ];

  const handleUpdate = async (values) => {
    const findCategory = categories.find((cat) => cat.name === values.category);
    let category_id;
    if (!findCategory) {
      const newCategory = {
        name: values.category,
      };
      await createCategory(newCategory).then(({ data }) => {
        addCategory(data);
        category_id = data.id;
      });
    } else {
      category_id = findCategory.id;
    }
    values["category_id"] = category_id;
    delete values.category;
    console.log(values);
    await postJob(user.id, values)
      .then(({ data }) => {
        addPost(data);
      })
      .catch((error) => console.log(error));
    navigate("/jobs-posting");
  };
  return (
    <main>
      <NewJobForm>
        <Formik initialValues={initialValues} onSubmit={handleUpdate}>
          <WrapperForm>
            <Title>Create new job posting</Title>
            <InfoPostingJob size="40%">
              <SubTitle>Main information</SubTitle>
              {mainInformation.map((data) => (
                <FormInput key={data.id} {...data} />
              ))}
            </InfoPostingJob>
            <InfoPostingJob>
              <SubTitle>Additional information</SubTitle>
              {additionalInformation.map((data) => (
                <FormInput key={data.id} {...data} />
              ))}
            </InfoPostingJob>
            <Button
              type="submit"
              style={{ width: "fit-content", fontWeight: "500" }}
            >
              Post this job
            </Button>
          </WrapperForm>
        </Formik>
      </NewJobForm>
    </main>
  );
};
