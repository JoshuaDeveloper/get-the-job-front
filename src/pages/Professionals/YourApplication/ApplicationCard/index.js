import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { fonts, typography } from "assets/typography";
import { useJobs } from "context/JobsContext";
import React, { useState } from "react";
import ExampleSvg from "assets/images/example_svg.svg";
import DateIcon from "assets/icons/date-icon.svg";
import SalaryIcon from "assets/icons/salary-icon.svg";
import { BiTime } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

import { AiOutlineMail } from "react-icons/ai";
import { FiPauseCircle } from "react-icons/fi";
import { Button } from "components/Button";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const StyledApplicationCard = styled.div`
  position: relative;
  padding: 1rem;
  padding-right: 1.5rem;
  border: 1px solid ${colors.backgroundDark};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* gap: 49px; */
`;
const ApplicationCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    ${typography.regular.caption}
  }
`;
const Title = styled.h6`
  ${typography.regular.headline6}
`;
const Subtitle = styled.p`
  ${typography.regular.subtitle2}
`;
const JobTarget = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;
const JobStart = styled.img`
  width: 60px;
  height: 60px;
`;
const JobEnd = styled.div``;
const JobDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
const DetailCol = styled.div`
  color: ${colors.lightGray};
  display: flex;
  gap: 0.15rem;
  & .capitalize {
    text-transform: capitalize;
  }
`;
const Status = styled.div`
  display: flex;

  gap: 0.25rem;
`;
const StatusItem = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ApplicationCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${(props) =>
    props.expand
      ? `height:fit-content;
          margin-top: 1rem;`
      : `height: 0;
          margin-top: 0;`}
  overflow-y: hidden;
`;
const LastUpdate = styled.p`
  ${typography.regular.overline}
  color: ${colors.gray};
  text-transform: uppercase;
  font-family: ${fonts.secondary};
`;
const ApplicationData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const DataTitle = styled.h6`
  ${typography.regular.subtitle2}
  color: ${colors.darkPink};
`;
const DataBody = styled.p`
  ${typography.regular.body2}
  color: ${colors.darkGray};
`;
const CardControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Controller = styled.div`
  position: absolute;
  bottom: 6px;
  right: 14px;
  & svg {
    cursor: pointer;
  }
`;
export const ApplicationCard = ({ application }) => {
  const { findJob, findCategory } = useJobs();
  const [expand, setExpand] = useState(false);
  const job = findJob(application.job_id);
  return (
    job && (
      <StyledApplicationCard>
        <ApplicationCardHeader>
          <JobTarget>
            <JobStart src={job.recruiter.logo_company_url} />
            <JobEnd>
              <Title>{job.title}</Title>
              <Subtitle>{job.recruiter.company_name}</Subtitle>
            </JobEnd>
          </JobTarget>
          <JobDetail>
            <DetailRow>
              <DetailCol>
                <img src={ExampleSvg} alt="exampleIcon" />
                <p className="capitalize">
                  {findCategory(job.category_id).name}
                </p>
              </DetailCol>
              <DetailCol>
                <img src={DateIcon} alt="dateicon" />
                <p>Full Time</p>
              </DetailCol>
            </DetailRow>
            <DetailRow>
              <DetailCol>
                <img src={SalaryIcon} alt="salaryicon" />
                <p>
                  {job.min_salary / 1000}k - {job.max_salary / 1000}k
                </p>
              </DetailCol>
              <DetailCol>
                <BiTime />
                <p>Posted 2 days ago</p>
              </DetailCol>
            </DetailRow>
          </JobDetail>
          <Status>
            <StatusItem>
              <AiOutlineMail />
              <p>Sent 1 min. ago</p>
            </StatusItem>
            <StatusItem>
              <FiPauseCircle />
              <p>Waiting for review</p>
            </StatusItem>
          </Status>
        </ApplicationCardHeader>
        <ApplicationCardBody expand={expand}>
          <LastUpdate>Last updated on 03/22/21</LastUpdate>
          <ApplicationData>
            <DataTitle>Professional Experience</DataTitle>
            <DataBody>{application.experience_sent}</DataBody>
          </ApplicationData>
          <ApplicationData>
            <DataTitle>
              Why are you interested in working at {job.recruiter.company_name}
            </DataTitle>
            <DataBody>{application.comment_aplication}</DataBody>
          </ApplicationData>
          <CardControl>
            <a
              target="_blank"
              href={application.cv_sent_url}
              rel="noopener noreferrer"
            >
              <Button
                btn_type="Secondary"
                leftIcon={<MdDownload size={"1.25rem"} />}
              >
                Download CV
              </Button>
            </a>
            <Button leftIcon={<ImCancelCircle size={"1.25rem"} />}>
              Decline Application
            </Button>
          </CardControl>
        </ApplicationCardBody>
        <Controller>
          {!expand ? (
            <BsChevronDown onClick={() => setExpand(true)} />
          ) : (
            <BsChevronUp onClick={() => setExpand(false)} />
          )}
        </Controller>
      </StyledApplicationCard>
    )
  );
};
