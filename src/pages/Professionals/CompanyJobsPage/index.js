import styled from "@emotion/styled";
import { typography } from "assets/typography";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FollowIcon from "assets/icons/follow-icon.svg";
import FollowIconSelect from "assets/icons/followSelect-icon.svg";
import CardJob from "components/CardJob/indes";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const Title = styled.div`
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
const StyledButton = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  > img {
    max-width: 22px;
    max-height: 22px;
  }
  > p {
    ${typography.regular.buttonJob};
    color: #616161;
    margin-left: 13px;
  }
`;

const ContainerJobs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CompanyJobsPage = () => {
  const { state } = useLocation();
  const [follow, setFollow] = useState(true);
  
  console.log(state);
  const handleChangeFollow = () => {};
  return (
    <main>
      <Header>
        <Title>
          <img
            src="https://guidottiasociados.com/cache/c/3/9/a/b/c39abec2d28e888e0333cd268551d0350b4aae1d.png"
            alt=""
            width={80}
            height={80}
          />
          <div>
            <h2 className="name">{state.company_name}</h2>
            <StyledButton onClick={handleChangeFollow}>
              <img
                src={follow ? FollowIconSelect : FollowIcon}
                alt="followIcon"
              />
              <p>FOLLOW</p>
            </StyledButton>
          </div>
        </Title>
      </Header>
      <h3> {state.jobs.length} job openings </h3>
      <ContainerJobs>
        {state.jobs.map((job) => (
          <CardJob
            key={job.id}
            {...job}
            
            company_name={state.company_name}
            show={false}
          />
        ))}
      </ContainerJobs>
    </main>
  );
};
