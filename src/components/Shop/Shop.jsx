import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

// shop components
const Shop = () => {
  // declare use state
  const [products, setProducts] = useState([]);
  const [addCart, setAddToCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  // event handler
  const handleAddCart = (product) => {
    setIsAdded(true);
    const newCart = [...addCart, product];
    setAddToCart(newCart);
  };

  // useEffect side effect fetch data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // react jsx
  return (
    <div className="grid order-2 grid-cols-1 md:order-1 md:grid-cols-5 max-w-[1200px] mx-auto">
      <div className="products-container mt-10 col-span-4">
        {/* banner */}
        {/* <Banner /> */}

        {/* products container */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-12">
          {products.map((product) => (
            <Product product={product} handleAddCart={handleAddCart}></Product>
          ))}
        </div>
      </div>

      {/* add to cart container */}
      <div className="cart-container h-screen sticky top-0 bg-slate-400 border-1 border-blue-200 border p-2">
        <h1>Summary</h1>
      </div>

      {/* end */}
    </div>
  );
};

export default Shop;
