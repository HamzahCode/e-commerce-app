"use client";
import Header from "./component/header";
import Categories from "./component/categories";
import Products from "./component/products";
import { useState, useEffect } from "react";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchcontent, setsearchcontent] = useState("");
  const [cart, setcart] = useState([]);
  const [alreadyincart, setalreadyincart] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setalreadyincart(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alreadyincart]);

  return (
    <div>
      {alreadyincart && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white p-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100">
          Already In The Cart!
        </div>
      )}
      <Header
        searchcontent={setsearchcontent}
        getcart={cart}
        getalready={alreadyincart}
      />
      <Categories onSelectCategory={setSelectedCategory} />
      <Products
        category={selectedCategory}
        search={searchcontent}
        onsetcart={setcart}
        already={setalreadyincart}
      />
    </div>
  );
}
