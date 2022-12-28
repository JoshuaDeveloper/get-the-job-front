import React, { useState } from "react";
import FollowIcon from "assets/icons/follow-icon.svg";
import FollowIconSelect from "assets/icons/followSelect-icon.svg";
import styled from "@emotion/styled";
import { typography } from "assets/typography";
import { colors } from "assets/colors";
import { useFollows } from "context/FollowContext";
import { useJobs } from "context/JobsContext";

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

function ButtonFollow({job_id, iamFollowing}) {
  const { setFollowCompany, setUnFollowCompany } = useFollows();
  const { change, setChange } = useJobs();
  const [follow, setFollow] = useState(iamFollowing);

  const handleChangeFollow = () => {
    setFollow(!follow);
    if (!follow) {
      setFollowCompany(job_id);
    }else {
      setUnFollowCompany(job_id);
    }
    setChange(!change)
  }

  return (
    <StyledButton onClick={ handleChangeFollow }>
      <img src={ follow ? FollowIconSelect : FollowIcon} alt="followIcon" />
      <p>FOLLOW</p>
    </StyledButton>
  );
}

export default ButtonFollow;
