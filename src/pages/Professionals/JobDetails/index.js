import { AiOutlineMail } from "react-icons/ai";
import { MdPrecisionManufacturing } from "react-icons/md";
import { Button } from "components/Button";
import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useJobs } from "context/JobsContext";
import { InfoJob } from "./InfoJob";
import { ApplyJob } from "./ApplyJob";
import styled from "@emotion/styled";
import { typography } from "assets/typography";
import FollowIcon from "assets/icons/follow-icon.svg";
import FollowIconSelect from "assets/icons/followSelect-icon.svg";
import { useFollows } from "context/FollowContext";
import { useAuth } from "context/UserContext";

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

const CardInfoJob = ({ title, content }) => (
  <Styled.Card>
    <h4 className="name">{title}</h4>
    <div className="info">
      <MdPrecisionManufacturing />
      <p>{content}</p>
    </div>
  </Styled.Card>
);

export const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [apply, setApply] = useState(false);
  const { jobs, findJob, findCategory, change, setChange } = useJobs();
  const [job, setJob] = useState(null);
  const { follows } = useFollows();

  console.log(follows.followsRecruiter);

  const { setFollowCompany, setUnFollowCompany } = useFollows();
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    console.log(findJob(id));
    setJob(findJob(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, id]);

  const categoryName = (id) => {
    return findCategory(id).name;
  };
  const fNumber = Intl.NumberFormat("en-US");

  const handleChangeFollow = () => {
    setFollow(!follow);
    if (!follow) {
      setFollowCompany(job.recruiter.id);
    } else {
      console.log("Entrooo");
      setUnFollowCompany(job.recruiter.id);
    }
    setChange(!change);
  };

  return job ? (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>
          <img
            src={job.recruiter.logo_company_url}
            alt=""
            width={80}
            height={80}
          />
          <div>
            <h2 className="name">{job.recruiter.company_name}</h2>
            <StyledButton onClick={handleChangeFollow}>
              <img
                src={follow ? FollowIconSelect : FollowIcon}
                alt="followIcon"
              />
              <p>FOLLOW</p>
            </StyledButton>
          </div>
        </Styled.Title>
        <Button leftIcon={<AiOutlineMail size={"1.25rem"} />} padding="apply">
          {" "}
          apply now
        </Button>
      </Styled.Header>
      <Styled.Main>
        <Styled.HeaderJob>
          <h3>{job.title}</h3>
          <p>Posted 2 days ago</p>
        </Styled.HeaderJob>
        <Styled.InfoJob>
          <Styled.ContainerCards>
            <CardInfoJob
              title="Category"
              content={categoryName(job.category_id)}
            />
            <CardInfoJob title="Type" content={"Fulltime"} />
            <CardInfoJob
              title="Salary"
              content={`${fNumber.format(job.min_salary)} - ${fNumber.format(
                job.max_salary
              )}`}
            />
          </Styled.ContainerCards>
          {!apply ? (
            <InfoJob setApply={setApply} job={job} />
          ) : (
            <ApplyJob job={job} />
          )}
        </Styled.InfoJob>
      </Styled.Main>
    </Styled.Wrapper>
  ) : (
    "Cargando :v"
  );
};
