import React from "react";

const Cart = (props) => {
  const addCart = props.addCart;
  console.log(addCart);

  //   total
  let totalPrice = 0;
  let shipping = 0;
  for (const product of addCart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  //   calculate tax
  const tax = (totalPrice * 7) / 100;

  //   calculate grand total
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="p-3">
      <p className=" text-sm font-semibold">Selected Items: {addCart.length}</p>
      <p className=" text-sm font-semibold">
        Total Price: ${totalPrice.toFixed(2)}
      </p>
      <p className=" text-sm font-semibold">
        Total Shipping: ${shipping.toFixed(2)}
      </p>
      <p className=" text-sm font-semibold">Tax: ${tax.toFixed(2)}</p>
      <p className="font-bold">Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
