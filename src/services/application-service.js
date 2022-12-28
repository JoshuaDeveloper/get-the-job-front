import { apiFetch } from "./api-fetch";

export const getApplications = (id) => {
  return apiFetch.get(`/professionals/${id}/process`);
};
export const createApplication = (id, body) => {
  return apiFetch.post(`/professionals/${id}/process`, body);
};
export const changeApplicationState = (recruiter_id, application_id, body) => {
  console.log(body);
  return apiFetch.patch(
    `/recruiters/${recruiter_id}/applications_recruiter/${application_id}`,
    body
  );
};
