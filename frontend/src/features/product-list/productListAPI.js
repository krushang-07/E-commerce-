// A mock function to mimic making an async request for data
export async function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

//fetch products by filters

export async function fetchProductByFilter(filter) {
  //filter: {"category":"smartphone"}
  //sort = {_sort:"price",_order="desc"}
  //todo: sever for multiple catagory
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    console.log(response);
    const data = await response.json();
    resolve({ data });
  });
}
