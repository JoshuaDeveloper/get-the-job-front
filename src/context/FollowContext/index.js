import { useContext } from "react";
import { FollowsContext } from "./FollowsContext";

export { FollowsProvider } from "./FollowsProvider";

export const useFollows = () => useContext(FollowsContext);
