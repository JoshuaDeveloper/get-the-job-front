import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${(props) =>
    props.active
      ? `height: fit-content;
  margin-top: 1rem;
  `
      : `height: 0;
  margin-top: 0;
  `}
  & > p {
    width: 360px;
  }
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
