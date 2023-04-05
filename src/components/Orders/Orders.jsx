import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewCart from "../ReviewCart/ReviewCart";

const Orders = () => {
  const carts = useLoaderData();
  return (
    <div className="grid order-2 grid-cols-1 md:order-1 md:grid-cols-5 max-w-[1200px] mx-auto">
      <div className="products-container mt-10 col-span-4">
        {carts.map((cart) => (
          <ReviewCart cart={cart} />
        ))}
      </div>
      <div className="cart-container h-screen sticky top-0 bg-orange-300 bg-opacity-60 border-1 border-blue-200 border p-2">
        <Cart addCart={carts} />
      </div>
    </div>
  );
};

export default Orders;
