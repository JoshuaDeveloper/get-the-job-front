import styled from "@emotion/styled";
import { typography } from "assets/typography";

const StyledSideBarItem = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  min-height: 48px;
  align-items: center;
  padding: 0 18px;
  cursor: pointer;

  > p {
    ${typography.regular.itemSideBar};
    color: #373737;
    margin-left: 9.69px;
  }

  &:hover {
    background-color: #ffffff;
  }
  &.active {
    background-color: #ffffff;
  }
`;

function SideBarLogout({ icon, text, ...props }) {
  return (
    <StyledSideBarItem {...props}>
      {icon}
      <p>{text}</p>
    </StyledSideBarItem>
  );
}

export default SideBarLogout;
