import styled from "@emotion/styled";
import { colors } from "assets/colors";

const InputContainer = styled.div`
  ${(props) => props.typography}
  background: ${(props) =>
    props.background ? props.background : colors.white};
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  ${(props) =>
    props.background ? "border: none" : `border: 1px solid ${colors.pink}`};
  border-radius: 0.5rem;
  color: ${(props) => (props.color ? props.color : colors.darkGray)};
  &:hover {
    ${(props) =>
      props.background
        ? "border: none"
        : `border: 1px solid ${colors.darkPink}`};
  }
  &:active {
    ${(props) =>
      props.background
        ? "border: none"
        : `border: 1px solid ${colors.darkPink}`};
  }
`;

const StyledInput = styled.div`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  color: ;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${colors.darkPink};
  }
`;

function SInput({ leftIcon, rightIcon, children, onClick, ...props }) {
  const LeftIcon = leftIcon;
  const RightIcon = rightIcon;
  return (
    <InputContainer {...props}>
      {leftIcon && (
        <Icon onClick={onClick}>
          <LeftIcon />
        </Icon>
      )}

      <StyledInput>{children}</StyledInput>
      {rightIcon && (
        <Icon onClick={onClick}>
          <RightIcon />
        </Icon>
      )}
    </InputContainer>
  );
}

export default SInput;
