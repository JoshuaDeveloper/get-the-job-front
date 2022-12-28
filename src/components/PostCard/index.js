import styled from "@emotion/styled";
import { colors } from "assets/colors";
import React, { useState } from "react";
import ExampleSvg from "assets/images/example_svg.svg";
import { usePosting } from "context/PostingContext";
import DateIcon from "assets/icons/date-icon.svg";
import SalaryIcon from "assets/icons/salary-icon.svg";
import { fonts, typography } from "assets/typography";
import { RiMailOpenLine } from "react-icons/ri";
import { candidatesOnTrack, formatDate } from "utils";
import { BiUserCircle } from "react-icons/bi";
import { Button } from "components/Button";
import { BsChevronDown, BsChevronUp, BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

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
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardInfo = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
`;
const CardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  & p {
    ${typography.regular.caption}
    color: ${colors.lightGray};
  }
`;
const CardStatus = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
const StatusItem = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 5rem;
  text-align: center;
  ${typography.regular.caption}
`;
const Count = styled.p`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
const CardControl = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
const CardBody = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & h6 {
    ${typography.regular.subtitle1}
    color: ${colors.darkPink};
  }
  & p {
    ${typography.regular.body2}
    font-family: ${fonts.secondary};
  }
`;
const Controller = styled.div`
  position: absolute;
  bottom: 6px;
  right: 14px;
  & svg {
    cursor: pointer;
  }
`;
const CardBodyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const PostCard = ({ post }) => {
  
  const [expand, setExpand] = useState(false);
  const { findCategory, closeMyPost } = usePosting();
  const open_on = formatDate(post.created_at);
  const Category = styled.p`
    text-transform: capitalize;
  `;
  const fCategory = findCategory(post.category_id)

  const CloseBtn = ()=>(<Button
    onClick = {()=>closeMyPost(post.id)}
    btn_type="Cancel"
    leftIcon={<AiOutlineCloseCircle size={"1.25rem"} />}
  >
    Close
  </Button>)
  const ClosedBtn = ()=>(<Button
    onClick = {()=>closeMyPost(post.id)}
    btn_type="Disabled"
    disabled
    leftIcon={<AiOutlineCloseCircle size={"1.25rem"} />}
  >
    Closed
  </Button>)
  return (
    <Container>
      <CardHeader>
        <CardInfo>
          <h6>{post.title}</h6>
          <CardDetail>
            <DetailItem>
              <img src={ExampleSvg} alt="exampleIcon" />
              {fCategory && <Category>{fCategory.name}</Category>}
            </DetailItem>
            <DetailItem>
              <img src={DateIcon} alt="dateicon" />
              <p>Full time</p>
            </DetailItem>
            <DetailItem>
              <img src={SalaryIcon} alt="salaryicon" />
              <p>
                {post.min_salary / 1000}k - {post.max_salary / 1000}k
              </p>
            </DetailItem>
          </CardDetail>
        </CardInfo>
        <CardStatus>
          <StatusItem>
            <RiMailOpenLine size={"1.25rem"} />
            <p>Open on {open_on}</p>
          </StatusItem>
          <StatusItem>
            <Count>
              <BiUserCircle size={"1.25rem"} /> {post.applications_count}
            </Count>
            <p>Total Candidates</p>
          </StatusItem>
          <StatusItem>
            <Count>
              <BiUserCircle size={"1.25rem"} />{" "}
              {candidatesOnTrack(post.applications)}
            </Count>
            <p>Candidates on track</p>
          </StatusItem>
        </CardStatus>
        <CardControl>
          <Link to={`/jobs-posting/${post.id}`}>
            <Button btn_type="Ghost" leftIcon={<BsSearch size={"1.25rem"} />}>
              Show
            </Button>
          </Link>
          {!post.closed ?<CloseBtn />
           : <ClosedBtn />}
        </CardControl>
      </CardHeader>
      <CardBody expand={expand}>
        <CardBodyItem>
          <h6>About the job position</h6>
          <p>{post.about}</p>
        </CardBodyItem>
        <CardBodyItem>
          <h6>Mandatory Requirements</h6>
          <p>{post.mandatory_requirements}</p>
        </CardBodyItem>
        <CardBodyItem>
          <h6>Optional Requirements</h6>
          <p>{post.optional_requirements}</p>
        </CardBodyItem>
      </CardBody>

      <Controller>
        {!expand ? (
          <BsChevronDown onClick={() => setExpand(true)} />
        ) : (
          <BsChevronUp onClick={() => setExpand(false)} />
        )}
      </Controller>
    </Container>
  );
};
