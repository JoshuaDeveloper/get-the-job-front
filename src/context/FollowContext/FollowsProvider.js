import { useJobs } from "context/JobsContext";
import { useAuth } from "context/UserContext";
import React, { useEffect, useReducer } from "react";
import { followCompany, followJob, unFollowCompany, unFollowJob } from "services/follows-services";
import { followReducer } from "./followReducer";
import { FollowsContext } from "./FollowsContext";

export const FollowsProvider = ({ children }) => {
  const { jobs } = useJobs();
  const { user } = useAuth();
  const [follows, dispatch] = useReducer(followReducer, {
    followsJob: [],
    followsRecruiter: []
  });
  useEffect(() => {
    const getFollows = () => {
      let followingsJob = [];
      let followingsRecruiter = [];
      jobs.forEach( job => {
        const exist = job.followers.some( follower => follower.professional_id === user.id);
        if (exist) {
          followingsJob.push(job)
        }
        const exist2 = job.recruiter.followers.some( follower => follower.professional_id == user.id);
        if (exist2) {
          followingsRecruiter.push(job.recruiter);
          return;
        }
      })
      dispatch({ type: "setFollowsJob", payload: {followingsJob, followingsRecruiter} });
    }
    getFollows();
  }, [jobs]);

  const setFollowJob = (jobId) => {
    followJob(user.id, jobId).then(({ data }) => {
      // dispatch({ type: "setJobs", payload: data });
    }).catch( console.log );
  } 

  const setUnFollowJob = (jobId) => {
    unFollowJob(user.id, jobId).then(({ data }) => {
      // dispatch({ type: "setJobs", payload: data });
    }).catch( console.log );
  } 

  const setFollowCompany = (jobId) => {
    followCompany(user.id, jobId).then(({ data }) => {
      // dispatch({ type: "setJobs", payload: data });
    }).catch( console.log );
  } 

  const setUnFollowCompany = (jobId) => {
    unFollowCompany(user.id, jobId).then(({ data }) => {
      // dispatch({ type: "setJobs", payload: data });
    }).catch( console.log );
  } 
  return (
    <FollowsContext.Provider value={{ follows, setFollowJob, setUnFollowJob, setFollowCompany, setUnFollowCompany }}>
      {children}
    </FollowsContext.Provider>
  );
};
