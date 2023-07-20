import { getProductDetail } from "../Component/Api";
import { CountContexts } from "../Component/Contexts";
import { useContext } from "react";
function CheckOutPage() {
  const { cart } = useContext(CountContexts);

  return <div>This is checkout page</div>;
}

export default CheckOutPage;
