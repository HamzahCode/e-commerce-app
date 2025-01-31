"use client";
import { useState, createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchcontent, setsearchcontent] = useState("");
  const [cart, setcart] = useState([]);
  const [alreadyincart, setalreadyincart] = useState("");
  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchcontent,
        setsearchcontent,
        cart,
        setcart,
        alreadyincart,
        setalreadyincart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
