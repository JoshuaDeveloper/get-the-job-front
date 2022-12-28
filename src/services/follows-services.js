import { apiFetch } from "./api-fetch";

export function followJob(idProfessional, idJob) {
  return apiFetch.post(`/professionals/${idProfessional}/follow_job/${idJob}`);
}
export function unFollowJob(idProfessional, idJob) {
  return apiFetch.delete(`/professionals/${idProfessional}/unfollow_job/${idJob}`);
}
export function followCompany(idProfessional, idJob) {
  return apiFetch.post(`/professionals/${idProfessional}/follow_recruiter/${idJob}`);
}
export function unFollowCompany(idProfessional, idJob) {
  return apiFetch.delete(`/professionals/${idProfessional}/unfollow_recruiter/${idJob}`);
}
