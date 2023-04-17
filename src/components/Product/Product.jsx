import React from "react";

const Product = (props) => {
  const handleAddCart = props.handleAddCart;
  const { id, img, name, seller, quantity, price, ratingsCount } =
    props.product;
  return (
    <div className="card border border-stone-400 card-compact w-full bg-base-100 shadow-xl">
      <figure className="w-full h-[50%]">
        <img className="w-full rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">
          Price: <span className="text-orange-400">{price}</span> BDT
        </p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratingsCount} Starts</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddCart(props.product)}
            className="btn btn-primary rounded-3xl w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
