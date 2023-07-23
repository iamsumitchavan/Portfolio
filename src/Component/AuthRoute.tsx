import { useContext } from "react";
import { CountContexts } from "./Contexts";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const { user } = useContext(CountContexts);

  if (user) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};

export default AuthRoute;
