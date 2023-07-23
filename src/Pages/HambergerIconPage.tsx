import { Navigate } from "react-router-dom";
import { CountContexts } from "../Component/Contexts";
import { useContext } from "react";

const HambergerIconPage = () => {
  const { setUser, user } = useContext(CountContexts);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <div className=" absolute origin-left duration-5000 flex justify-center flex-col gap-6 items-center h-screen bg-black w-full  ">
        <div className="p-2 text-white shadow-xl w-60 text-center  font-display text-xl">
          All item
        </div>
        <div className="p-2 text-white shadow-xl w-60 text-center  font-display text-xl">
          All About
        </div>

        <button
          onClick={() => {
            setUser(undefined);
            localStorage.removeItem("token");
          }}
          className="p-2 shadow-xl w-60   text-white text-center font-display text-xl"
        >
          Log Out
        </button>

        <div className="p-2 text-white shadow-xl w-60 text-center font-display text-xl">
          Reset App
        </div>
      </div>
    </div>
  );
};

export default HambergerIconPage;
