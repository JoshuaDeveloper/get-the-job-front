import { Button } from "components/Button";
import * as Styled from "./styles";
import { AiOutlineMail } from 'react-icons/ai';

export const InfoJob = ({ job, setApply }) => {
  return (
    <>
      <Styled.AboutJob>
        <h3 className="title">About {job.recruiter.company_name}</h3>
        <p className="description">{job.recruiter.about_company}</p>
      </Styled.AboutJob>
      <Styled.AboutJob>
        <h3 className="title">About the job position</h3>
        <p className="description">{job.about}</p>
      </Styled.AboutJob>
      <Styled.AboutJob>
        <h3 className="title">Mandatory Requirements</h3>
        <p className="description">{job.mandatory_requirements}</p>
      </Styled.AboutJob>
      <Styled.ContainerButton>
        <Button
          onClick={() => setApply(true)}
          leftIcon={<AiOutlineMail stroke="white" size={"1.25rem"} />}
          padding="apply"
        >
          apply now
        </Button>
      </Styled.ContainerButton>
    </>
  );
};
