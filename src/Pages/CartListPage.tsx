import products from "../models";
import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { CountContexts } from "../Component/Contexts";

const CartListPage = ({ title, description, price, id }: products) => {
  const { cart, updateCart } = useContext(CountContexts);

  console.log("cartListPage is rendering");

  function handleChangeCart(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(event.currentTarget.getAttribute("value"));
    const productId = event.currentTarget.getAttribute("value");
    const newcart = { ...cart };
    delete newcart[productId!];
    updateCart(newcart);
  }

  return (
    <div>
      <div>
        <div className="flex flex-col gap-2 lg:justify-center lg:items-center ">
          <div className="flex gap-4 items-center justify-center ">
            <div className="p-2 shadow-md rounded-full ">
              <h1 className="text-xl font-semibold font-display text-green-900">
                {cart[id]}
              </h1>
            </div>
            <button value={id} onClick={handleChangeCart}>
              <CiCircleRemove className="text-3xl font-bold text-black hover:cursor-pointer" />
            </button>

            <h1 className="text-xl font-semibold font-display text-green-900 hover:text-green-600 ">
              {title}
            </h1>
          </div>

          <p className="text-sm font-display text-green-950">{description}</p>
        </div>
        <div className="py-8 lg:flex lg:justify-center lg:items-center">
          <h1 className="text-xl font-semibold font-display text-green-900">
            ${price}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartListPage;
