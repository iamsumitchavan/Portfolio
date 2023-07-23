import { ChangeEvent, FC, useContext, useState } from "react";
import products from "../models";
import { Link } from "react-router-dom";
import { CountContexts } from "../Component/Contexts";

const Product: FC<products> = ({
  title,
  thumbnail,
  price,
  id,
  description,
}) => {
  const { handleChangeCart } = useContext(CountContexts);

  const [cartCount, setCartCount] = useState<number>();

  function handleAddToCartValue(event: ChangeEvent<HTMLInputElement>) {
    setCartCount(+event.currentTarget.value);
  }

  const handleButtonClick = () => {
    handleChangeCart(id, cartCount);
  };

  return (
    <div>
      <div className="sm:flex sm:justify-center sm:items-center sm:p-0 lg:space-x-3 lg:rounded-lg lg:shadow-lg">
        <div className="flex justify-center items-center ">
          <Link to={"/" + id}>
            <img
              className="h-52 w-60 object-cover shadow-lg "
              src={thumbnail}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-2 px-4 relative sm:flex sm:justify-center sm:items-center ">
          <Link to={"/" + id}>
            <h1
              className="font-display text-center font-semibold text-2xl text-green-950 sm:text-xl sm:w-64
              "
            >
              {title}
            </h1>
          </Link>
          <div className="w-52 flex justify-center py-2 sm:flex-row sm:justify-center sm:object-cover ">
            <p className="text-lg sm:text-sm">{description}</p>
          </div>

          <div className="flex gap flex-col justify-center items-center sm:flex sm:px-8 sm:justify-start lg:py-2 ">
            <p className="text-xl font-display text-green-950 font-bold">
              ${price}
            </p>
            <div className="flex">
              <input
                onChange={handleAddToCartValue}
                className="w-12 h-10 py-2 p-2 border border-black hover:cursor-pointer "
                type="number"
              />
              <button
                onClick={handleButtonClick}
                type="button"
                className="py-2 w-32  bg-black text-white "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
