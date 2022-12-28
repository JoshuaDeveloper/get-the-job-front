import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";

// Info Job
export const Card = styled.div`
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding: 16px 32px;
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.gray};
  }
  .info {
    text-transform: capitalize;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 24px;
    color: ${colors.darkGray};
  }
`;
export const Wrapper = styled.main`
  padding: 32px 120px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }
  .name {
    ${typography.regular.headline5}
  }
`;
export const Main = styled.div``;
export const HeaderJob = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h3 {
    ${typography.regular.headline3}
  }
  p {
    ${typography.regular.overline}
  }
`;
export const InfoJob = styled.div``;
export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 54px;
`;
export const AboutJob = styled.div`
  margin-bottom: 1rem;
  .title {
    color: ${colors.darkPink};
    ${typography.regular.headline5};
    margin-bottom: 0.5rem;
  }
  .description {
    ${typography.regular.body1};
    color: ${colors.darkGray};
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

// Apply Job
export const ApplicationTitle = styled.h3`
  color: ${colors.darkPink};
  ${typography.regular.headline5};
  margin-bottom: 1rem;
`;
