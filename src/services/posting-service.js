import { apiFetch } from "./api-fetch";

export const getPostings = (id) => {
  return apiFetch.get(`/recruiters/${id}/jobs`);
};

export const closePost = (recruiter_id, id)=>{
  return apiFetch.patch(`/recruiters/${recruiter_id}/jobs/${id}`)

}
export const postJob = (id, postData) => {
  return apiFetch.post(`/recruiters/${id}/jobs`, postData);
};
