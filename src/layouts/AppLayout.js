import styled from "@emotion/styled";
import { colors } from "assets/colors";

export const AppLayout = styled.div`
  max-height: 100vh;
  display: grid;
  grid-template-columns: 240px auto;
  overflow: hidden;
  & main {
    height: 100vh;
    overflow-y: scroll;
    padding: 2rem 7.5rem;
    height: 100vh;
    background-color: ${colors.background};
  }
`;
