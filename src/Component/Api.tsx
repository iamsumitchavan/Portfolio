import axios from "axios";

export const getProductList = (
  sortBy?: string,
  search?: string,
  page?: number,
  sortType?: string
) => {
  let params: any = {};
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params: {
        sortBy: sortBy,
        search: search,
        page: page,
        sortType: sortType,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getProductDetail = (productId: number) => {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + productId)
    .then((response) => {
      console.log("product detail product is ", response);
      return response.data;
    });
};
