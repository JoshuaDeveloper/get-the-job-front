import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { CandidateCard } from "components/CandidateCard";
import { PostCard } from "components/PostCard";
import { RadioButton } from "components/RadioButton";
import { usePosting } from "context/PostingContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.background};
  & h4 {
    ${typography.regular.headline4}
  }
  & h6 {
    ${typography.regular.headline6}
  }
`;

const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & p {
    ${typography.regular.overline}
    text-transform: uppercase;
  }
`;
const Options = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const Candidates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ShowPost = () => {
  const { id } = useParams();
  const { findPost } = usePosting();
  const post = findPost(id);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [initApplications, setInitApplications] = useState([]);
  useEffect(() => {
    if (post) {
      const undeclined = post.applications.filter(
        (application) => application.state !== "declined"
      );
      setFilteredApplications(undeclined);
      setInitApplications(undeclined);
    }
  }, [post]);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let _filteredApplications = initApplications;
    switch (filter) {
      //waiting_for_review review_in_progess review_finished declined

      case "waiting":
        _filteredApplications = initApplications.filter(
          (application) => application.state === "waiting_for_review"
        );
        setFilteredApplications(_filteredApplications);
        break;
      case "in progress":
        _filteredApplications = initApplications.filter(
          (application) => application.state === "review_in_progess"
        );
        setFilteredApplications(_filteredApplications);
        break;
      case "finished":
        _filteredApplications = initApplications.filter(
          (application) => application.state === "review_finished"
        );
        setFilteredApplications(_filteredApplications);
        break;
      default:
        setFilteredApplications(_filteredApplications);
        break;
    }
  }, [filter, initApplications]);

  return (
    post &&
    filteredApplications && (
      <StyledMain>
        <h4>Show Job Posting</h4>
        <PostCard post={post} />
        <FilterList>
          <p>Filter your Job Postings</p>
          <Options>
            <RadioButton
              defaultChecked
              onChange={() => setFilter("all")}
              label={"All"}
              name="filter"
            />
            <RadioButton
              onChange={() => setFilter("waiting")}
              label={"Waiting"}
              name="filter"
            />
            <RadioButton
              onChange={() => setFilter("in progress")}
              label={"In Progress"}
              name="filter"
            />
            <RadioButton
              onChange={() => setFilter("finished")}
              label={"Finished"}
              name="filter"
            />
          </Options>
        </FilterList>
        <Candidates>
          <h6>{filteredApplications.length} candidates found</h6>
          {filteredApplications.map((application) => (
            <CandidateCard key={application.id} application={application} />
          ))}
        </Candidates>
      </StyledMain>
    )
  );
};
