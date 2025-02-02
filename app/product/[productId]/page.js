"use client";
import { useContext, useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { AppContext } from "@/app/context/appcontext";
export default function ProductDetails({ params }) {
  const prodid = React.use(params);
  const { productId } = prodid;
  const [product, setproduct] = useState([]);
  const {
    setcart,
    setalreadyincart,
    cart,
    alreadyincart,
    setaddedtocart,
    addedtocart,
  } = useContext(AppContext);
  function handleaddtocart(prod) {
    setalreadyincart(false);
    setaddedtocart(false);
    const isProdincart = cart.some((item) => item.id === prod.id);
    if (isProdincart) {
      setalreadyincart(true);
    } else {
      setcart([...cart, prod]);
      setaddedtocart(true);
    }
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch(
          `https://fakestoreapi.in/api/products/${productId}`
        );
        const res = await data.json();
        console.log(res.product);
        setproduct(res.product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setalreadyincart(null);
      setaddedtocart(null);
    }, 1000);

    return () => clearTimeout(timer);
  }, [alreadyincart, addedtocart]);

  return (
    <>
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
      <h1 className="text-center font-bold text-4xl mt-10 text-gray-800">
        Product Details
      </h1>

      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-6">
        <hr className="mb-6" />
        {console.log(product.length)}
        {product.title ? (
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              ) : (
                <div className="w-full lg:w-1/2 animate-pulse">
                  <div className=" rounded-lg w-[400px] h-[400px] bg-[#dddddd]" />
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="font-bold text-3xl text-gray-900">
                {product.title}
              </h2>
              <div className="text-lg">
                <span className="font-bold">Category: </span>
                <span className="capitalize text-gray-700">
                  {product.category}
                </span>
              </div>

              <hr />
              <div>
                <div className="font-bold text-lg">Description:</div>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="pr-4 font-bold text-gray-900">Brand:</td>
                    <td className="capitalize text-gray-700">
                      {product.brand}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 font-bold text-gray-900">Model:</td>
                    <td className="capitalize text-gray-700">
                      {product.model}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 font-bold text-gray-900">Color:</td>
                    <td className="capitalize text-gray-700">
                      {product.color}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full lg:w-1/3 p-5 bg-gray-100 rounded-lg shadow-md">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Price:</span>
                <span className="text-red-500">${product.price}</span>
              </div>
              <hr className="my-3" />
              <button
                className="w-full  hover:bg-gray-500 text-black border border-solid border-gray-500 font-bold py-2 px-4 rounded-lg transition duration-200"
                onClick={() => handleaddtocart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 animate-pulse">
            <div className="w-full lg:w-1/2">
              <div className=" rounded-lg w-[400px] h-[400px] bg-[#dddddd]" />
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <div className="bg-[#dddddd] h-6"></div>
              <div className="bg-[#dddddd] h-6"></div>
              <div className="bg-[#dddddd] h-6"></div>
              <div className="bg-[#dddddd] h-6"></div>

              <div className=" bg-[#dddddd] w-24 h-6"></div>

              <hr />
              <div className="space-y-4">
                <div className=" bg-[#dddddd] w-24 h-6"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
                <div className="bg-[#dddddd] h-3"></div>
              </div>

              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="bg-[#dddddd] h-6"></td>
                  </tr>
                  <tr>
                    <td className="bg-[#dddddd] h-6"></td>
                  </tr>
                  <tr>
                    <td className="bg-[#dddddd] h-6"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full lg:w-1/3 p-5 bg-gray-100 rounded-lg shadow-md">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <div className="bg-[#dddddd] h-6"></div>
              </div>
              <hr className="my-3" />
              <button
                className="w-full  hover:bg-gray-500 text-black border border-solid border-gray-500 font-bold py-2 px-4 rounded-lg transition duration-200"
                onClick={() => handleaddtocart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
