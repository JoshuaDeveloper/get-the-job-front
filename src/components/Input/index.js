import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { Field } from "formik";

const InputContainer = styled.div`
  ${typography.regular.body2}
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${colors.pink};
  border-radius: 0.5rem;
  color: ${colors.darkGray};
  &:hover {
    border: 1px solid ${colors.darkPink};
  }
  &:active {
    border: 1px solid ${colors.darkPink};
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background-color: transparent;
`;

const TextArea = styled(Field)`
  ${typography.regular.body2}
  background-color: transparent;
  resize: none;
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${colors.pink};
  border-radius: 0.5rem;
  color: ${colors.darkGray};
  &:hover {
    border: 1px solid ${colors.darkPink};
  }
  &:active {
    border: 1px solid ${colors.darkPink};
  }
`;

export const Input = ({ leftIcon, rightIcon, ...props }) => {
  if (props.type === "text-area") {
    return <TextArea as="textarea" {...props} rows="5" />;
  }
  return (
    <InputContainer>
      {leftIcon}
      <StyledInput placeholder="placeholder" {...props} />
      {rightIcon}
    </InputContainer>
  );
};
