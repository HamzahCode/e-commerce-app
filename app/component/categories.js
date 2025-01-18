import Image from "next/image";
import jewelery from "../images/accessories.png";
import men_clothing from "../images/clothes.png";
import woman_clothes from "../images/woman-clothes.png";
import electronic from "../images/electronic.png";
import ClearIcon from "@mui/icons-material/Clear";
export default function Categories({ onSelectCategory }) {
  return (
    <>
      <div className="categ mt-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center gap-4 place-items-center">
        <div
          className="men's-clothes relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            onSelectCategory("men's clothing");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={men_clothing}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0 group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Men&apos;s Clothing
          </div>
        </div>
        <div
          className="women's_clothes relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28 lg:w-36 md:w-28"
          onClick={() => {
            onSelectCategory("women's clothing");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={woman_clothes}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Women&apos;s Clothing
          </div>
        </div>
        <div
          className="electronic relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            onSelectCategory("electronics");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons font-bold w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={electronic}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Electronic
          </div>
        </div>
        <div
          className="accessories relative group/lable group flex justify-center items-center flex-col cursor-pointer bg-blue-100 rounded-full p-3 h-24 w-24 lg:h-36 md:h-28  lg:w-36 md:w-28"
          onClick={() => {
            onSelectCategory("jewelery");
            let x = document.querySelector(".clear-categ");
            x.style.display = "flex";
          }}
        >
          <Image
            className="icons w-[70px] lg:w-[100px] md:w-[80px] p-3 group-hover:p-4 group-hover/lable:opacity-50 ease-in duration-[250ms]"
            src={jewelery}
            alt=""
          />
          <div className="lable font-bold absolute bottom-0 left-[50%] translate-y-1/2 -translate-x-1/2 w-full text-center mt-5 ease-in duration-[350ms] opacity-0  group-hover/lable:opacity-100 group-hover/lable:bottom-[50%]">
            Jewelerys
          </div>
        </div>
      </div>
      <div className="relative m-5">
        <div
          className="clear-categ bg-[#ff1e1e] w-20 text-white rounded-md space-x-2 cursor-pointer flex absolute right-0 top-0"
          style={{ display: "none" }}
          onClick={(ele) => {
            onSelectCategory("");
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
