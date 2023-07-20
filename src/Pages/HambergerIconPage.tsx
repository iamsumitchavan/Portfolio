import { CountContexts } from "../Component/Contexts";
import { useContext } from "react";

const HambergerIconPage = () => {
  const { setUser } = useContext(CountContexts);
  return (
    <div>
      <div className=" w-60 list-none transition-transform-1000">
        <div className="p-2 w-full shadow-sm text-green-700 font-display text-xl">
          All item
        </div>
        <div className="p-2 w-full shadow-sm text-green-700 font-display text-xl">
          All About
        </div>

        <button
          onClick={() => {
            setUser(undefined);
          }}
          className="p-2 w-full shadow-sm text-green-700 text-start font-display text-xl"
        >
          Log Out
        </button>

        <div className="p-2 w-full shadow-sm text-green-700 font-display text-xl">
          Reset App
        </div>
      </div>
    </div>
  );
};

export default HambergerIconPage;
