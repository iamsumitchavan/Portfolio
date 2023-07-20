import { FC, useState, useEffect, useContext } from "react";
import { getProductDetail } from "../Component/Api";
import products from "../models";
import CartListPage from "./CartListPage";
import { CountContexts } from "../Component/Contexts";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

type CartPageProps = {};

const CartPage: FC<CartPageProps> = () => {
  const [products, setProducts] = useState<products[]>();
  const { cart } = useContext(CountContexts);

  const data = localStorage.getItem("my-cart")!;
  const productData = JSON.parse(data);
  const productId = Object.keys(productData);
  useEffect(() => {
    const myproducts = productId.map((pid) => {
      return getProductDetail(+pid);
    });
    Promise.all(myproducts).then((p) => setProducts(p));
  }, [cart]);

  return (
    <div>
      <div className="py-3 px-4 shadow-sm">
        <h1 className="text-green-950 font-medium font-display text-lg">
          Your Cart
        </h1>
      </div>
      <div>
        <div className="flex gap-5 py-6 px-4 lg:justify-center lg:items-center lg:space-x-52 ">
          <h1 className="text-lg font-display text-green-950 px-2">Qty</h1>
          <p className="text-lg font-display text-green-950">Description</p>
        </div>
      </div>
      <div className="px-4">
        <div className=" flex flex-col gap-3 lg:px-36  ">
          {products?.map((p) => {
            return (
              <div className=" w-72 shadow-md px-4 py-2  flex flex-col lg:w-full   ">
                <CartListPage key={p.id} {...p} />
              </div>
            );
          })}
        </div>

        <div className="flex py-6 justify-center items-center">
          <IoIosArrowRoundBack className="relative left-10 text-xl" />
          <Link
            to="/"
            className="bg-white-900 hover:cursor-pointer text-black border text-center border-black p-2 w-60 rounded-md text-sm"
          >
            conitinue shopping
          </Link>
        </div>
        <div className="flex justify-center items-center ml-3">
          <Link
            to="/checkoutPage"
            className="bg-green-700 font-bold text-black  p-2 w-60 rounded-md text-sm text-center"
          >
            checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
