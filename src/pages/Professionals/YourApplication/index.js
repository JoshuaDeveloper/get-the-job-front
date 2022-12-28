import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { useApplication } from "context/ApplicationsContext";
import React from "react";
import { ApplicationCard } from "./ApplicationCard";

const StyledYourApplications = styled.main`
  & h4 {
    ${typography.regular.headline4}
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & p {
    text-transform: uppercase;
    ${typography.regular.overline}
  }
`;
const FilterList = styled.ul`
  display: flex;
  gap: 12px;
`;
const RadioInput = styled.div`
  display: flex;
  gap: 0.25rem;
`;
const ApplicationsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  & h6 {
    ${typography.regular.headline6}
  }
  `;
const ListApplications = styled.div`
  display:flex;
  flex-flow: column;
  gap: 1rem;
`
export const YourApplications = () => {
  const { applications } = useApplication();
  console.log(applications)
  return ( applications &&
    <StyledYourApplications>
      <h4>Your applications</h4>
      <Container>
        <FilterContainer>
          <p>Filter your applications</p>
          <FilterList>
            <RadioInput>
              <input
                defaultChecked
                type="radio"
                name="filter"
                value="all"
                id="1"
              />
              <label htmlFor="All">All</label>
            </RadioInput>
            <RadioInput>
              <input type="radio" value="waiting" name="filter" id="2" />
              <label htmlFor="All">Waiting</label>
            </RadioInput>
            <RadioInput>
              <input type="radio" value="progress" name="filter" id="3" />
              <label htmlFor="All">In Progress</label>
            </RadioInput>
            <RadioInput>
              <input type="radio" value="finished" name="filter" id="4" />
              <label htmlFor="All">Finished</label>
            </RadioInput>
            <RadioInput>
              <input type="radio" value="declined" name="filter" id="5" />
              <label htmlFor="All">Declined</label>
            </RadioInput>
          </FilterList>
        </FilterContainer>
        <ApplicationsContainer>
          <h6>{applications.length} applications found</h6>
          <ListApplications>
            {
              applications.map(application=><ApplicationCard key={application.id} application={application} />)
            }
          </ListApplications>
        </ApplicationsContainer>
      </Container>
    </StyledYourApplications>
  );
};
