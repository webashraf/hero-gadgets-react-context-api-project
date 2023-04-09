import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header"
import Home from './components/Home';
import { createContext, useState } from "react";

export const CartContex = createContext();


const App = () => {
  const loaderData = useLoaderData();
  const [cart, setCart] = useState(loaderData);
  console.log(loaderData);
  return (
    <div>
      <CartContex.Provider value={[cart, setCart]} >
      <Header />
      <Outlet></Outlet>
      </CartContex.Provider>
    </div>
  )
}

export default App
