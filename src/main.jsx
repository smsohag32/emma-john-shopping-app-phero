import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import LoadOrder from "./LoadOrder/LoadOrder";
import CheckOut from "./components/CheckOut/CheckOut";
import SingUp from "./components/SingUp/SingUp";
import AuthProvider, { AuthContext } from "./Providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: LoadOrder,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singup",
        element: <SingUp />,
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
