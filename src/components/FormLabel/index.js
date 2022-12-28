import { FormError } from "components/FormError";
import styled from "@emotion/styled";

import { ErrorMessage, Field, useField } from "formik";
import { colors } from "assets/colors";
import { typography } from "assets/typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
    ${typography.regular.overline}
  }
`;
const Message = styled.p`
  color: ${colors.lightGray};
  text-align: start;
  ${typography.regular.caption}
`;

function FormLabel({ label, caption, ...props }) {
  const [field] = useField({ ...props });
  return (
    <Container className={props.type}>
      <label htmlFor={props.name}>{label}</label>
      <Field {...field} name={props.name} {...props} />
      <ErrorMessage
        name={props.name}
        component={<FormError>{props.error}</FormError>}
      />
    </Container>
  );
}

export default FormLabel;
