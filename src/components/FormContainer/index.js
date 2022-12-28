import styled from "@emotion/styled";
import { Form } from "formik";
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .text,
  & .email,
  & .date,
  & .url,
  & .password,
  & .tel, & > p {
    width: 360px;
  }
  & textarea{
    max-width: 760px;
  }
`;
