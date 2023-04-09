import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from './components/Home';
import ProductCard from './components/Cards/ProductCard';
import Shop from "./components/Shop";
import About from "./components/About";
import ErrorPage from './components/ErrorPage';
import CartItem from "./components/Cards/CartItem";
import { cartItems } from "./utilitis/cardProduct";
import Cart from "./components/Cards/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: cartItems,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: 'cart',
            element: <Cart></Cart>,
            loader: cartItems
        },
        {
            path: "shop",
            element: <Shop></Shop>,
            loader: () => fetch('products.json')
        },
        {
            path: 'about',
            element: <About></About>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
