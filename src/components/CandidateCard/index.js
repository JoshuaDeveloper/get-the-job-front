import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { fonts, typography } from "assets/typography";
import { Button } from "components/Button";
import React, { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiPauseCircle } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useAuth } from "context/UserContext";
import { usePosting } from "context/PostingContext";

const Container = styled.div`
  padding: 1rem;
  padding-right: 2.5rem;
  background-color: white;
  border: 1px solid ${colors.backgroundDark};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  position: relative;
  & h6 {
    ${typography.regular.headline6}
  }
  display: flex;
  flex-direction: column;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    ${typography.regular.caption}
    font-family: ${fonts.secondary};
  }
`;
const CardPInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.primary};
`;
const CardPTitle = styled.div`
  display: flex;
  align-items:center;
  gap: 0.25rem;
`;
const CardCInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
`;
const CardContact = styled.div`
  display: flex;
  gap: 0.25rem;
`;
const CardStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 5rem;
`;
const Overline = styled.p`
  ${typography.regular.overline}
  text-transform: uppercase;
`;
const CardControl = styled.div``;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${(props) =>
    props.expand
      ? `
    height: fit-content;
    margin-top: 12px;
  `
      : `
    height: 0;
    margin-top: 0;
  `}
  overflow: hidden;
`;
const CardBodyItem = styled.div`
  & h6 {
    ${typography.regular.subtitle1}
    color: ${colors.darkPink};
  }
  & p {
    ${typography.regular.body2}
    font-family: ${fonts.secondary};
  }
`;
const CardBodyCV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Controller = styled.div`
  position: absolute;
  bottom: 6px;
  right: 14px;
  & svg {
    cursor: pointer;
  }
`;

export const CandidateCard = ({ application }) => {
  const { professional } = application;
  console.log(application.state);
  const { user } = useAuth();
  const { changeState } = usePosting();
  const [expand, setExpand] = useState(false);

  const StateButtons = {
    waiting_for_review: (
      <Button
        onClick={() => changeState(application.id, "review_in_progess")}
        btn_type="Secondary"
      >
        Mark as started
      </Button>
    ),
    review_in_progess: (
      <Button
        onClick={() => changeState(application.id, "review_finished")}
        btn_type="Secondary"
      >
        Mark as finished
      </Button>
    ),
    review_finished: (
      <Button btn_type="Disabled" disabled>
        Finished
      </Button>
    ),
  };
  return (
    user &&
    professional &&
    application && (
      <Container>
        <CardHeader>
          <CardPInfo>
            <h6>{professional.name}</h6>
            <CardPTitle>
              <AiOutlineLinkedin />
              <p>{professional.title}</p>
            </CardPTitle>
          </CardPInfo>
          <CardCInfo>
            <CardContact>
              <HiOutlineMail />
              <p>{professional.email}</p>
            </CardContact>
            <CardContact>
              <HiPhone />
              <p>{professional.phone}</p>
            </CardContact>
          </CardCInfo>
          <CardStatus>
            <StatusItem>
              <HiOutlineMail />
              <p>Sent 1 day ago</p>
            </StatusItem>
            <StatusItem>
              <BiPauseCircle />
              <p>Waiting for review</p>
            </StatusItem>
          </CardStatus>
          <CardControl>{StateButtons[application.state]}</CardControl>
        </CardHeader>
        <CardBody expand={expand}>
          <Overline>Last Updated on 03/22/21</Overline>
          <CardBodyItem>
            <h6>Professional experience</h6>
            <p>{application.experience_sent}</p>
          </CardBodyItem>
          <CardBodyItem>
            <h6>Why are you interested in working at {user.company_name}</h6>
            <p>{application.comment_application}</p>
          </CardBodyItem>
          <CardBodyCV>
            <a
              target="_blank"
              href={application.cv_sent_url}
              rel="noopener noreferrer"
            >
              <Button
                btn_type="Secondary"
                leftIcon={<FiDownload size={"1.25rem"} />}
              >
                Download CV
              </Button>
            </a>
          </CardBodyCV>
        </CardBody>
        <Controller>
          {!expand ? (
            <BsChevronDown onClick={() => setExpand(true)} />
          ) : (
            <BsChevronUp onClick={() => setExpand(false)} />
          )}
        </Controller>
      </Container>
    )
  );
};
