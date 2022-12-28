import { useFollows } from "context/FollowContext";
import React, { useEffect, useReducer, useState } from "react";
import { getCategories, getJobs } from "services/jobs-services";
import { JobsContext } from "./JobsContext";
import { jobsReducer } from "./jobsReducer";

export const JobsProvider = ({ children }) => {
  const { follows } = useFollows();
  const [change, setChange] = useState(true);
  const [state, dispatch] = useReducer(jobsReducer, {
    categories: [],
    jobs: [],
  });

  const findJob = (id) => {
    console.log(id);
    return state.jobs.find((job) => job.id === parseInt(id));
  };
  const findCategory = (id) => {
    return state.categories.find((cat) => cat.id === parseInt(id));
  };
  useEffect(() => {
    getJobs().then(({ data }) => {
      dispatch({ type: "setJobs", payload: data });
    });
  }, [change]);

  useEffect(() => {
    getCategories().then(({ data }) => {
      dispatch({ type: "setCategories", payload: data });
    });
  }, []);

  return (
    <JobsContext.Provider
      value={{ ...state, findJob, findCategory, setChange, change }}
    >
      {children}
    </JobsContext.Provider>
  );
};
