import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";

const status_enum = {
  pending: "PENDING",
  done: "DONE!",
  progress: "IN PROGRESS",
};

const StyledStatus = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const handleCircleStyles = (status) => {
  switch (status) {
    case "done":
      return `
        background-color: ${colors.gray};
        `;
    case "progress":
      return `background-color: ${colors.pink};`;
    default:
      return `background-color: ${colors.backgroundDark};`;
  }
};
const Circle = styled.div`
  ${(props) => handleCircleStyles(props.status)}
  height: 2rem;
  width: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const handleInfoStyles = (status) => {
  switch (status) {
    case "done":
      return `
        color: ${colors.gray};
        `;
    case "progress":
      return `color: ${colors.darkGray};`;
    default:
      return `color: ${colors.lightGray};`;
  }
};

const Info = styled.div`
  ${(props) => handleInfoStyles(props.status)}
  & h6 {
    ${typography.regular.overline}
  }
  & p {
    ${typography.regular.body1}
  }
`;

export const Status = ({ status , index, children }) => {
  return (
    <StyledStatus>
      <Circle status={status}>{index}</Circle>
      <Info status={status}>
        <h6>{status_enum[status]}</h6>
        <p>{children}</p>
      </Info>
    </StyledStatus>
  );
};
