import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import React from "react";

const StyledRadioButton = styled.div`
  display: flex;
  gap: 0.25rem;
  & label {
    color: ${colors.gray};
    ${typography.regular.body2}
  }
`;

export const RadioButton = ({ label, ...props }) => {
  return (
    <StyledRadioButton>
      <input type="radio" {...props} />
      <label htmlFor={props.name || props.id}>{label}</label>
    </StyledRadioButton>
  );
};
