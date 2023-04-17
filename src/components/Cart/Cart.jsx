import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
const Cart = (props) => {
  const addCart = props.addCart;
  const handleClear = props.handleClear;
  const children = props.children;
  //   total
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of addCart) {
    // product quantity jodi na thake

    // product.quantity = product.quantity || 1;
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }

    totalPrice = totalPrice + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  //   calculate tax
  const tax = (totalPrice * 7) / 100;

  //   calculate grand total
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="p-3">
      <p className="my-5 font-bold text-lg">Order Summary:</p>
      <p className=" text-md font-semibold mb-2">Selected Items: {quantity}</p>
      <p className=" text-sm font-semibold">
        Total Price: {totalPrice.toFixed(2)} BDT
      </p>
      <p className=" text-sm font-semibold">
        Total Shipping: {shipping.toFixed(2)} BDT
      </p>
      <p className=" text-sm font-semibold">Tax: {tax.toFixed(2)} BDT</p>
      <p className="font-bold mt-3">
        Grand Total: <br />
        {grandTotal.toFixed(2)} BDT
      </p>
      <button
        onClick={handleClear}
        className="btn-clear-cart flex justify-between mt-5 items-center w-full btn-warning text-white py-2 px-3 font-bold text-md"
      >
        Clear Cart
        <span>
          <TrashIcon className="h-6 w-6 text-white" />
        </span>
      </button>
      {children}
    </div>
  );
};

export default Cart;
