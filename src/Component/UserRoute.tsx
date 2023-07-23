import { useContext } from "react";
import { CountContexts } from "./Contexts";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }: any) => {
  const { user } = useContext(CountContexts);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default UserRoute;
