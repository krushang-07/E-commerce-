import React from "react";
import NavBar from "../features/nav-bar/NavBar";
import ProductList from "../features/product-list/components/ProductList";

const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
};

export default Home;
