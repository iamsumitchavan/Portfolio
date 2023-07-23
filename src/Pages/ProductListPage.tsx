import { getProductList } from "../Component/Api";
import { useEffect } from "react";

import { useState } from "react";
import Product from "./Product";
import products from "../models";
import { useSearchParams, Link } from "react-router-dom";
import Loading from "./Loading";

import { range } from "lodash";

const ProductListPage = () => {
  const [product, setProduct] = useState<{
    meta: { last_page: number };
    data: [];
  }>();

  let [searchParams, setSearchParams] = useSearchParams();

  const param = Object.fromEntries([...searchParams]);

  let { query, sort } = param;

  let page = Number(param.page);

  query = query || "";
  page = page || 1;
  sort = sort || "";

  useEffect(() => {
    let sortby;
    let sortType;
    if (sort == "title") {
      sortby = "title";
    } else if (sort == "lowToHigh") {
      sortby = "price";
    } else if (sort == "highToLow") {
      sortby = "price";
      sortType = "desc";
    }
    getProductList(sortby, query, page, sortType).then((response) => {
      return setProduct(response);
    });
  }, [sort, page, query]);

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchParams(
      { ...param, query: event.target.value },
      { replace: false }
    );
  }

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSearchParams({ ...param, sort: event.target.value }, { replace: false });
  }

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="py-3 shadow-sm flex justify-between  ">
        <h1 className="font-display text-xl font-semibold text-green-950 px-5">
          Products
        </h1>
        <div className="sm:px-32">
          <div className="sm:px-5 flex sm:w-80 lg:px-5 lg:gap-1 sm:justify-start lg:ml-28">
            <input
              placeholder="search Products here"
              onChange={handleQueryChange}
              className="py-2 w-40 shadow-lg rounded-sm outline-none border focus:border-green-800 bg-slate-200 focus:bg-white"
              type="text"
            />
            <select
              onChange={handleSortChange}
              className="py-2 w-32 shadow-lg rounded-sm outline-none border focus:border-green-800 bg-slate-200 focus:bg-white"
            >
              <option value="default">sort by default</option>
              <option value="title">sort by title</option>
              <option value="lowToHigh">sort by price LowToHigh</option>
              <option value="highToLow">sort by price HighToLow</option>
            </select>
          </div>
        </div>
      </div>
      <div className="lg:px-20 ">
        <div className=" flex justify-center flex-col items-center object-cover py-5 gap-4 lg:flex-row lg:flex-wrap lg:gap-8 ">
          {product.data.length == 0 && <div>invalid search</div>}
          {product.data.map((p: products) => (
            <Product key={p.id} {...p} />
          ))}
        </div>
      </div>
      <div className=" flex justify-start items-start gap-1 py-3 px-5 lg:ml-28">
        {product &&
          range(1, product.meta.last_page + 1).map((item?: any) => (
            <Link
              className={
                " py-2 px-3 text-white rounded-none " +
                (page == item ? "bg-black" : "bg-green-600")
              }
              to={"?" + new URLSearchParams({ ...param, page: item })}
              key={item}
            >
              {item}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductListPage;
