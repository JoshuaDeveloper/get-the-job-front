import { useContext } from "react";
import { JobsContext } from "./JobsContext";
export { JobsProvider } from './JobsProvider';
export const useJobs = () => useContext(JobsContext);
