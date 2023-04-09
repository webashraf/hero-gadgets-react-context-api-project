import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header"
import Home from './components/Home';
import { createContext } from "react";

export const CartContex = createContext();


const App = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div>
      <CartContex.Provider value={loaderData} >
      <Header />
      <Outlet></Outlet>
      </CartContex.Provider>
    </div>
  )
}

export default App
