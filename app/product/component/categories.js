"use client";
import Image from "next/image";
import tv from "../../images/tv.png";
import audio from "../../images/audio.png";
import laptop from "../../images/laptop.png";
import mobilephone from "../../images/mobile-phone.png";
import gaming from "../../images/gaming.png";
import appliances from "../../images/appliances.png";
// import jewelery from "../images/accessories.png";
// import men_clothing from "../images/clothes.png";
// import woman_clothes from "../images/woman-clothes.png";
// import electronic from "../images/electronic.png";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { AppContext } from "@/app/context/appcontext";
export default function Categories() {
  const { setSelectedCategory } = useContext(AppContext);
  return (
    <>
      <div className="categ mt-14 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-center items-center text-center gap-4 place-items-center">
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("tv");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={tv}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0 group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Television
          </div>
        </div>
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("audio");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={audio}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0 group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Audio
          </div>
        </div>
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("laptop");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={laptop}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0 group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Laptop
          </div>
        </div>
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28 lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("mobile");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={mobilephone}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Mobile Phone
          </div>
        </div>
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("gaming");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons font-bold w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={gaming}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Gaming
          </div>
        </div>
        <div
          className="relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            setSelectedCategory("appliances");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={appliances}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Appliances
          </div>
        </div>
      </div>
      <div className="relative m-5">
        <div
          className="clear-categ bg-[#ff1e1e] w-20 text-white rounded-md space-x-2 cursor-pointer flex absolute right-0 top-0"
          style={{ display: "none" }}
          onClick={(ele) => {
            setSelectedCategory("");
            ele.currentTarget.style.display = "none";
          }}
        >
          <ClearIcon alt="" />
          <button>Clear</button>
        </div>
      </div>
    </>
  );
}
