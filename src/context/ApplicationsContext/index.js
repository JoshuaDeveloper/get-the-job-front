import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
export { ApplicationProvider } from "./ApplicationProvider";

export const useApplication = () => useContext(ApplicationContext);
