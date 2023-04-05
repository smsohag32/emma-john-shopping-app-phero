import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCart from "../ReviewCart/ReviewCart";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const loadedCart = useLoaderData();
  const [carts, setCarts] = useState(loadedCart);

  const handleCartRemove = (id) => {
    const remaining = carts.filter((product) => product.id !== id);
    setCarts(remaining);
    removeFromDb(id);
  };
  const handleClear = () => {
    setCarts([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid order-2 grid-cols-1 md:order-1 md:grid-cols-5 max-w-[1200px] mx-auto">
      <div className="products-container mt-10 col-span-4">
        {carts.map((cart) => (
          <ReviewCart
            key={cart.id}
            cart={cart}
            handleCartRemove={handleCartRemove}
          />
        ))}
      </div>
      <div className="cart-container h-screen sticky top-0 bg-orange-300 bg-opacity-60 border-1 border-blue-200 border p-2">
        <Cart addCart={carts} handleClear={handleClear}>
          <Link to="/checkout">
            <button className="flex justify-between mt-5 items-center w-full btn-warning text-white py-2 px-3 font-bold text-sm">
              Proceed Checkout
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
