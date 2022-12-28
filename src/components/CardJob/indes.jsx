import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ExampleLogoJob from "../../assets/images/ExampleLogoJobCard.png";
import ExampleSvg from "../../assets/images/example_svg.svg";
import DateIcon from "../../assets/icons/date-icon.svg";
import FollowIcon from "../../assets/icons/follow-icon.svg";
import SalaryIcon from "../../assets/icons/salary-icon.svg";
import { typography } from "assets/typography";
import ButtonApplied from "./components/ButtonApplied";
import ButtonFollow from "./components/ButtonFollow";
import { useAuth } from "context/UserContext";
import { Link } from "react-router-dom";
import { useJobs } from "context/JobsContext";
import { Button } from "components/Button";
import { useApplication } from "context/ApplicationsContext";

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

function CardJob({
  icon,
  category_id,
  id,
  title,
  min_salary,
  max_salary,
  type_job,
  followers,
  show = true,
  company_name,
}) {
  const { user } = useAuth();
  let iamFollowing = null;
  if (show) {
    iamFollowing = followers.some((job) => job.professional_id === user.id);
  }
  const { jobs, findJob, findCategory } = useJobs();

  const [recruiter, setRecruiter] = useState(null);
  useEffect(() => {
    const job = findJob(id);
    console.log(job);
    job && setRecruiter(job.recruiter);
  }, [jobs]);
  const { applications } = useApplication();
  const isApplicated = applications.some(
    (app) => app.professional_id === user.id && app.job_id === id
  );
  return (
    recruiter && (
      <CardJobContainer>
        <TopCardJob>
          <img src={recruiter.logo_company_url} alt="logoexample" />
          <DescriptionCardJob>
            <TopCardJob>
              <img src={ExampleSvg} alt="exampleIcon" />
              <TitleType>{findCategory(category_id).name}</TitleType>
            </TopCardJob>
            <JobTitle>{title}</JobTitle>

            <JobSubtitle>
              {show ? recruiter.company_name : company_name}
            </JobSubtitle>
            <TopCardJob>
              <img src={DateIcon} alt="dateIcon" />
              <TitleType>{type_job}</TitleType>
              <img
                src={SalaryIcon}
                alt="salaryIcon"
                style={{ marginLeft: "5.25px" }}
              />
              <TitleType>
                {min_salary / 1000}k - {max_salary / 1000}k
              </TitleType>
            </TopCardJob>
          </DescriptionCardJob>
        </TopCardJob>
        <BottomCardJob>
          {show && <ButtonFollow job_id={id} iamFollowing={iamFollowing} />}

          {!isApplicated ? (
            <Link to={`/jobs/${id}`}>
              <Button btn_type="Secondary">See More</Button>{" "}
            </Link>
          ) : (
            <Button btn_type="Disabled" disabled>Applied</Button>
          )}
        </BottomCardJob>
      </CardJobContainer>
    )
  );
}

export default CardJob;
