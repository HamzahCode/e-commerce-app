"use client";
import Header from "./component/header";
import { AppContext } from "./context/appcontext";
import { useState, useEffect, useContext } from "react";
export default function Home() {
  const { alreadyincart, setalreadyincart } = useContext(AppContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setalreadyincart(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [alreadyincart]);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {alreadyincart && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white p-2 rounded-md transition-opacity duration-300 ease-in-out opacity-100">
          Already In The Cart!
        </div>
      )}
    </div>
  );
}
