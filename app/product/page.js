"use client";
import Products from "./component/products";
import Categories from "./component/categories";
import { AppContext } from "../context/appcontext";
import { useContext, useEffect } from "react";
export default function ProductPage() {
  const { alreadyincart, setalreadyincart, addedtocart, setaddedtocart } =
    useContext(AppContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setalreadyincart(null);
      setaddedtocart(null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [alreadyincart, addedtocart]);

  return (
    <div>
      <Categories />
      <Products />
      {alreadyincart && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white p-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100">
          Already In The Cart!
        </div>
      )}
      {addedtocart && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white p-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100">
          Added To Cart!
        </div>
      )}
    </div>
  );
}
