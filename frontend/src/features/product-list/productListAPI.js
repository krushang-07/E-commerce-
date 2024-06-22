//import Pagination from "../../comman/Pagination";

//A mock function to mimic making an async request for data
export async function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
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
    console.log(response);
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}
