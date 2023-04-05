import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
const ReviewCart = ({ cart, handleCartRemove }) => {
  console.log(cart);
  const { id, img, name, quantity, price } = cart;
  return (
    <div className="flex w-4/6 mb-5 border p-4">
      <div className="flex gap-4 grow">
        <img src={img} className="w-20" alt="" />
        <div>
          <p>{name}</p>
          <p>
            Price: <span className="text-orange-400">{price}</span>
          </p>
          <p>
            Quantity: <span className="text-orange-400">{quantity}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleCartRemove(id)}
        className=" bg-red-100 h-[80%] flex justify-center items-center my-auto p-2 rounded-full bg-opacity-80"
      >
        <TrashIcon className="h-6 w-6 text-orange-400" />
      </button>
    </div>
  );
};

export default ReviewCart;
