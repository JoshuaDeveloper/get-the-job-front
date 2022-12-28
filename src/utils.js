export const formatDate = (str)=>
new Date(str).toLocaleDateString("en-US")
export const candidatesOnTrack = (applications) => {
  return applications.filter(
    (application) => application.state !== "review_finished"
  ).length;
};