import { FC } from "react";
import { Link } from "react-router-dom";
import { getProductDetail } from "../Component/Api";
import { useState, useEffect } from "react";
import products from "../models";
import { useParams } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import Loading from "./Loading";

type ProductDetailPageProps = {};

const ProductDetailPage: FC<ProductDetailPageProps> = () => {
  const [product, setProduct] = useState<products>();

  const params = useParams();
  const productId = params.id && +params.id;

  useEffect(() => {
    if (productId) {
      getProductDetail(productId).then((product) => {
        setProduct(product);
      });
    }
  }, []);

  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex justify-start items-center gap-20 px-6 py-3 shadow-sm">
        <Link to="/">
          <GrFormPreviousLink className="text-xl font-bold" />
        </Link>
        <div>
          <Link
            to="/"
            className="text-green-950 font-semibold font-display text-lg"
          >
            back to product
          </Link>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col h-screen justify-center items-center">
          <div className="">
            <img
              className="h-80 w-64 shadow-sm px-4"
              src={product.thumbnail}
              alt=""
            />
            <div className="flex flex-col justify-center items-center space-y-4 lg:justify-center lg:items-center">
              <h1 className="font-display  font-bold text-xl text-green-950">
                {product.title}
              </h1>
              <p className="w-64 text-black font-display">
                {product.description}
              </p>
              <p>
                <span className="font-display font-bold text-lg">Brand : </span>
                {product.brand}
              </p>
              <p>
                <span className="font-display font-bold text-lg">
                  Category:{" "}
                </span>
                {product.category}
              </p>
              <p>
                <span className="font-display font-bold text-lg">Price: </span>$
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
