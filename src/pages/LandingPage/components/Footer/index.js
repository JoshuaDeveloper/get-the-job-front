import styled from "@emotion/styled";
import React from "react";
import { SiRuby, SiReact } from "react-icons/si";
import { colors } from "assets/colors/";
import { typography } from "assets/typography/";
const StyledFooter = styled.footer`
  ${typography.regular.subtitle2}
  padding: 0 7.5rem;
  height: 72px;
  color: ${colors.darkGray};
  background-color: ${colors.backgroundDark};
  & svg {
    color: ${colors.gray};
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 2rem;
  border-top: 1px solid ${colors.darkPink};
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;
const Tech = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;
const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10.59px;
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>© 202X - Get That Job</p>
        <Center>
          <p>Source Code</p>
          <Tech>
            <TechItem>
              <SiRuby /> <p>Ruby on Rails REST API</p>
            </TechItem>
            <TechItem>
              <SiReact /> <p>React Responsive SPA</p>
            </TechItem>
          </Tech>
        </Center>
        <p>Codeable - Cohort X Final Project</p>
      </Container>
    </StyledFooter>
  );
};
