import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContex } from "../../App";
import { clearShoppingCart } from "../../utilitis/fakeDb";

const Cart = () => {
  const [cart, setCart] = useContext(CartContex);
  console.log("Context data", cart);
  let total = 0;
  const handleRemoveBtn = () => clearShoppingCart();
  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 mx-auto ">
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
      </ul>
      {cart.map((pd) => (total = total + pd.price))}
      <h1 className="text-xl">Total amount: {total}</h1>
      <p>Not including taxes and shipping costs</p>
      <div className="flex justify-center">
        {
            cart.length > 0 ? <button onClick={handleRemoveBtn} className="btn-outlined">Clear Cart</button> : <Link to={"/"} className="btn-outlined">Back to home</Link>
        }
        
        <button className="btn-primary">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
