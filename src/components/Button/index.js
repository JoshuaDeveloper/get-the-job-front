import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

const handleStyles = (props) => {
  let styles = "";
  switch (props.btn_type) {
    case "Secondary":
      styles += `
        color: ${colors.gray};
        background: ${colors.white};
        border: 1px solid ${colors.pink};
        &:hover{
            border-color: ${colors.darkPink};
            background: ${colors.shallowPink};
            color: ${colors.darkGray};
        }
        `;
      break;
    case "Ghost":
      styles += `
        color: ${colors.gray};
        background: transparent;
        &:hover{
            color: ${colors.darkGray};
            background: ${colors.shallowPink}
        }
        `;
      break;
    case "Cancel":
      styles+=`
        
      background: ${colors.darkPink};
      color: ${colors.white};
      `
      break;

    case "Disabled":
      styles += `color: ${colors.lightGray};
        background: ${colors.backgroundDark};
`;
      break;
    default:
      styles += `
        color: ${colors.white};
        background: ${colors.pink};
        &:hover{
            background: ${colors.darkPink};
        }
        `;
      break;
  }
  switch (props.size) {
    case "Large":
      styles += `
        padding: 1rem 24px;
        height: 56px;
        font-size: 14px;

        `;
      break;
    default:
      styles += `
        padding: 0.5rem 1rem;
        height: 40px;
        font-size: 14px;
        `;
      break;
  }
  return styles;
};

const StyledButton = styled.button`
  border-radius: 16px;
  cursor: pointer;
  ${typography.regular.button};
  justify-content: center;
  text-transform: uppercase;
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  ${(props) => handleStyles(props)}
  padding: ${(props) => props.padding === "apply" && "16px 24px"};
  height: ${(props) => props.padding === "apply" && "auto"};
`;
export const Button = ({
  btn_type = "Primary",
  size = "default",
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  return (
    <StyledButton btn_type={btn_type} size={size} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};
