import React from "react";
import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";

const StyledButton = styled.div`
  background-color: transparent;
  border: 1px solid #f48fb1;
  padding: 8px 16px;
  border-radius: 16px;
  > p {
    ${typography.regular.buttonJob};
    color: #616161;
  }
`;

function ButtonApplied() {
  return (
    <StyledButton>
      <p>SEE MORE</p>
    </StyledButton>
  );
}

export default ButtonApplied;
