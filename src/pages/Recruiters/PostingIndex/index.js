import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import { PostCard } from "components/PostCard";
import { RadioButton } from "components/RadioButton";
import { usePosting } from "context/PostingContext";
import React, { useEffect, useState } from "react";
import { candidatesOnTrack } from "utils";

const StyledMain = styled.main`
  display: flex;
  background: ${colors.background};
  flex-direction: column;
  gap: 1rem;
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
const Postings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const PostingIndex = () => {
  const { postings } = usePosting();
  console.log(postings);
  const [filteredPostings, setFilteredPostings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let _filteredPostings = postings;
    switch (filter) {
      case "cand_on_track":
        _filteredPostings = postings.filter(
          (post) => candidatesOnTrack(post.applications) > 0
        );

        setFilteredPostings(_filteredPostings);
        break;
      case "closed":
        _filteredPostings = postings.filter((post) => post.closed);
        setFilteredPostings(_filteredPostings)
        break;
      default:
        setFilteredPostings(postings);
        break;
    }
  }, [filter, postings]);
  return (
    filteredPostings && (
      <StyledMain>
        <h4>Job Postings</h4>
        <FilterList>
          <p>Filter your Job Postings</p>
          <Options>
            <RadioButton
              onChange={() => {
                setFilter("All");
              }}
              defaultChecked
              label={"All"}
              name="filter"
            />
            <RadioButton
              onChange={() => {
                setFilter("cand_on_track");
              }}
              label={"With candidates on track"}
              name="filter"
            />
            <RadioButton
              onChange={() => {
                setFilter("closed");
              }}
              label={"Closed"}
              name="filter"
            />
          </Options>
        </FilterList>
        <Postings>
          <h6>{filteredPostings.length} postings found</h6>
          {filteredPostings.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Postings>
      </StyledMain>
    )
  );
};
