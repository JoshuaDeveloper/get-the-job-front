import { Global } from "@emotion/react";
import { global, reset } from "assets/global/global";
import { AuthenticatedApp } from "AuthenticatedApp";
import { useAuth } from "context/UserContext";
import { UnauthenticatedApp } from "UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Global styles={reset} />
      <Global styles={global} />
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}

    </>
  );
}

export default App;
