import WithUser from "../Component/WithUser";
import { FC, memo } from "react";

type HambergerIconPageProps = {
  setUser: (args: any) => void;
};

const HambergerIconPage: FC<HambergerIconPageProps> = ({ setUser }) => {
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

export default WithUser(memo(HambergerIconPage));
