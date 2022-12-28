import React from "react";
import styled from "@emotion/styled";
import ExampleLogoJob from "../../assets/images/ExampleLogoJobCard.png";
import ExampleSvg from "../../assets/images/example_svg.svg";
import JobIcon from "../../assets/icons/job-icon.svg";
import FollowIcon from "../../assets/icons/follow-icon.svg";
import SalaryIcon from "../../assets/icons/salary-icon.svg";
import { typography } from "assets/typography";
import ButtonApplied from "./components/ButtonApplied";
import ButtonFollow from "./components/ButtonFollow";
import { useAuth } from "context/UserContext";
import { Link } from "react-router-dom";
import { useJobs } from "context/JobsContext";
import { Button } from "components/Button";

const CardJobContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  max-height: 170px;
  max-width: 290px;
  padding: 18.67px;
`;

const TopCardJob = styled.div`
  display: flex;
  flex-direction: row;
`;

const DescriptionCardJob = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11px;
`;

const TitleType = styled.h4`
text-transform: capitalize;
  font-family: ${typography.regular.body1};
  color: #8e8e8e;
  margin-left: 5.88px;
`;

const BottomCardJob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const JobTitle = styled.p`
  ${typography.regular.jobTitleCard};
  color: #373737;
`;

const JobSubtitle = styled.p`
  ${typography.regular.jobSubtitleCard};
  color: #616161;
`;

function CardCompany({
  company_name,
  id,
  company
}) {
  console.log(company)
  return (
    <CardJobContainer>
      <TopCardJob>
        <img src={ExampleLogoJob} alt="logoexample" />
        <DescriptionCardJob>
          <JobTitle> {company_name}</JobTitle>
          <TopCardJob>
            <img src={JobIcon} alt="JobIcon" />
            <TitleType>{company.jobs.length} jobs openings</TitleType>
          </TopCardJob>
        </DescriptionCardJob>
      </TopCardJob>
      <BottomCardJob>
        <ButtonFollow  job_id = {id} iamFollowing = {true}/>
        <Link to={`/company-jobs/${id}`} state = { company }>
          <Button btn_type="Secondary">See More</Button>
        </Link>
      </BottomCardJob>
    </CardJobContainer>
  );
}

export default CardCompany;
