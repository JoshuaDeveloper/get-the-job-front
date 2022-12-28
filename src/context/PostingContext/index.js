import { useContext } from "react";
import { PostingContext } from "./PostingContext";

export { PostingProvider } from "./PostingProvider";

export const usePosting = () => useContext(PostingContext);
