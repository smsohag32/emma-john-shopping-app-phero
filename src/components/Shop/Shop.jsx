import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

// shop components
const Shop = () => {
  // declare use state
  const [products, setProducts] = useState([]);
  const [addCart, setAddToCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  // pagination
  const { totalProducts } = useLoaderData();
  // const itemsPerPage = 10; //TODO: MAKE IT DYNAMIC
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  const option = [5, 10, 20, 35];

  const handleSelectChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  // event handler
  const handleAddCart = (product) => {
    setIsAdded(true);
    // const newCart = [...addCart, product];
    let newCart = [];
    const exists = addCart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...addCart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = addCart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, product];
    }

    setAddToCart(newCart);
    addToDb(product._id);
  };
  const handleClear = () => {
    setAddToCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        const savedCart = [];
        // step 1 get id
        for (const id in storedCart) {
          // step -2 get the product using id
          const addedProduct = products.find((product) => product._id == id);
          if (addedProduct) {
            // step -3 get quantity of the product
            const quantity = storedCart[id];
            // savedProduct.quantity = quantity;
            addedProduct.quantity = quantity;

            // step -4 add the added product to the saved cart
            savedCart.push(addedProduct);
          }
        }
        setAddToCart(savedCart);
      });
  }, [products]);
  // useEffect side effect fetch data
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      const result = await response.json();
      setProducts(result);
    }

    fetchData();
  }, [currentPage, itemsPerPage]);

  // react jsx
  return (
    <>
      <div className="grid order-2 scroll-auto grid-cols-1 md:order-1 md:grid-cols-5 max-w-[1200px] mx-auto">
        <div className="products-container mt-10 col-span-4">
          {/* banner */}
          {/* <Banner /> */}

          {/* products container */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-12">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleAddCart={handleAddCart}
              ></Product>
            ))}
          </div>
        </div>

        {/* add to cart container */}
        <div className="cart-container h-screen sticky top-0 bg-orange-300 bg-opacity-60 border-1 border-blue-200 border p-2">
          <Cart addCart={addCart} handleClear={handleClear}>
            <Link to="/orders">
              <button className="flex justify-between mt-5 items-center w-full btn-warning text-white py-2 px-3 font-bold text-sm">
                Review Order
              </button>
            </Link>
          </Cart>
        </div>

        {/* end */}
      </div>
      <div className="text-center flex-wrap justify-center mt-10 mb-8 flex gap-2">
        {pageNumbers.map((num) => (
          <button
            onClick={() => setCurrentPage(num)}
            className="border-2 btn btn-outline btn-square"
            key={num}
            disabled={currentPage == num}
          >
            {num}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {option.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
