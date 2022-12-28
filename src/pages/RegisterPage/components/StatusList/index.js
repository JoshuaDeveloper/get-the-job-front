import styled from "@emotion/styled";
import { Status } from "../Status/";

const StyledStatusList = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const StatusList = ({ list }) => {
  return (
    <StyledStatusList>
      {list.map((elem, i) => (
        <Status key={i} status={elem.status} index={i + 1}>
          {elem.text}
          <br />
          information
        </Status>
      ))}
    </StyledStatusList>
  );
};
