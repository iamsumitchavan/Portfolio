import { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
import HambergerIconPage from "../Pages/HambergerIconPage";
import { Link } from "react-router-dom";

interface NavBarProps {
  count: number;
}
const NavBar: FC<NavBarProps> = ({ count }) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className="py-3 flex justify-between shadow-sm">
      <div className="px-4 sm:px-10">
        <button onClick={() => setIcon(!icon)}>
          <GiHamburgerMenu className="text-2xl text-black" />
        </button>
        <div className="py-2">{icon && <HambergerIconPage />}</div>
      </div>
      <div className="sm:flex w-80 sm:justify-end">
        <h1 className="text-2xl text-black">Sauce Demo</h1>
      </div>
      <div className="px-4 sm:px-32 lg:px-8">
        <Link to="/cart" className="p-2">
          <BsHandbag className="text-4xl text-black relative left-1 lg:left-2" />
          <span className="absolute right-6 top-6 sm:px-28 lg:px-4 lg:relative lg:left-1 lg:-top-6   ">
            {count}
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
