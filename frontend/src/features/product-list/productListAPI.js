//import Pagination from "../../comman/Pagination";

//A mock function to mimic making an async request for data
export async function fetchAllProducts() {
  // return new Promise(async (resolve) => {
  //   const response = await fetch("http://localhost:8000/products");
  //   console.log(response);
  //   const data = await response.json();
  //   resolve({ data });
  // });
}

//fetch products by filters

export async function fetchProductByFilter(filter, sort, pagination) {
  //filter: {"category":"smartphone"}
  //sort = {_sort:"price",_order="desc"}
  //pagination = page=1&_limit=10

  //todo: sever for multiple catagory

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  console.log(queryString);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8000/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItem: +totalItems } });
  });
}
export async function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/category");
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}
export async function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/brands");
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}
