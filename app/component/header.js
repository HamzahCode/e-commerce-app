"use client";
import Image from "next/image";
import e_com_logo from "../images/e-commerce-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../context/appcontext";
import { useState, useContext } from "react";
import Cart from "./cart";
import Link from "next/link";
export default function Header() {
  const { setsearchcontent, cart, alreadyincart } = useContext(AppContext);
  const [nav, usenav] = useState(false);
  function handlenav() {
    usenav(!nav);
  }
  function handlechangesearch(content) {
    setsearchcontent(content);
  }
  const styledrawer = {
    backgroundColor: "red",
  };
  return (
    <>
      <div className="main-header flex items-center left-0 top-0 w-full max-h-16 text-center font-medium font-sans border-b border-solid border-gray-300">
        <div>
          <Link href={"/"}>
            <Image src={e_com_logo} alt="" width={120} height={25} />
          </Link>
        </div>
        <div className=" flex justify-end items-center h-14 p-3 w-full sm:justify-evenly">
          {/* Large Screen Navbar */}
          <div className="navbar flex justify-start items-center">
            <ul className="hidden sm:flex justify-center items-center space-x-7 text-black font-bold">
              <li className="cursor-pointer opacity-45 hover:opacity-100">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer opacity-45 hover:opacity-100">
                <Link href={"../product"}>Products</Link>
              </li>
              {/* <li className="cursor-pointer opacity-45 hover:opacity-100">
                <Link href={""}>About</Link>
              </li>
              <li className="cursor-pointer opacity-45 hover:opacity-100">
                <Link href={""}>Contact</Link>
              </li> */}
            </ul>
          </div>
          {/* Drawer Navbar Icon */}
          <div
            className="sm:hidden block z-20 cursor-pointer mr-2"
            onClick={handlenav}
          >
            {nav ? (
              <CloseIcon onClick={handlenav} />
            ) : (
              <MenuIcon onClick={handlenav} />
            )}
          </div>
          {/* Small Screen Navbar */}
          <div
            className={
              nav
                ? "sm:hidden flex justify-center z-10 items-center flex-col absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-white text-center ease-in duration-300"
                : "hidden"
            }
          >
            <div className="flex searchbar justify-center items-center space-x-4 w-1/2 mb-20">
              <input
                placeholder="Search"
                className="border-black border-2 bg-transparent rounded-md  p-1 w-full"
                type="text"
                onChange={(e) => handlechangesearch(e.target.value)}
              />
              <SearchIcon
                className="proc-icons text-xl"
                sx={{ fontSize: 25 }}
              />
            </div>
            <ul className="flex flex-col justify-center items-center space-y-5 text-black font-bold">
              <li className="cursor-pointer opacity-45 hover:opacity-100 text-3xl">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer opacity-45 hover:opacity-100 text-3xl">
                <Link href={"../product"}>Products</Link>
              </li>
              {/* <li className="cursor-pointer opacity-45 hover:opacity-100 text-3xl">
                About
              </li>
              <li className="cursor-pointer opacity-45 hover:opacity-100 text-3xl">
                Contact
              </li> */}
            </ul>
          </div>

          <div className=" searchbar justify-center items-center space-x-4 w-2/6 hidden sm:flex">
            <input
              placeholder="Search"
              className="border-black border-2 bg-transparent rounded-md  p-1 w-full"
              type="text"
              onChange={(e) => handlechangesearch(e.target.value)}
            />
            <SearchIcon className="proc-icons text-xl" sx={{ fontSize: 25 }} />
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
}
