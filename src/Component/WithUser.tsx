import { CountContexts } from "./Contexts";
import { useContext } from "react";

const WithUser = (IncomingComponent: any) => {
  function OutgoingComponent() {
    const { user, setUser } = useContext(CountContexts);
    return <IncomingComponent user={user} setUser={setUser} />;
  }

  return OutgoingComponent;
};

export default WithUser;
