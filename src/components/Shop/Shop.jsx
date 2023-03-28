import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
            <Product
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
            ></Product>
          ))}
        </div>
      </div>

      {/* add to cart container */}
      <div className="cart-container h-screen sticky top-0 bg-orange-300 bg-opacity-60 border-1 border-blue-200 border p-2">
        <h1 className="font-bold text-center">Order Summary</h1>
        <hr className="my-2 border-red-400" />
        <Cart addCart={addCart} />
      </div>

      {/* end */}
    </div>
  );
};

export default Shop;
