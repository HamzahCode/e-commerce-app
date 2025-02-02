"use client";
import { useEffect, useState, useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { AppContext } from "@/app/context/appcontext";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Products() {
  const {
    selectedCategory,
    searchcontent,
    setcart,
    setalreadyincart,
    cart,
    setaddedtocart,
  } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [filters, setfilters] = useState([]);
  const [carting, setcarting] = useState([]);

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
        const data = await fetch("https://fakestoreapi.in/api/products");
        const res = await data.json();
        setProducts(res.products);
        setfilters(res.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => setfilters([...products]), [products]);

  useEffect(() => {
    const filtered = products.filter(
      (prod) => prod.category === selectedCategory
    );
    if (filtered.length > 0) {
      setfilters(filtered);
    } else {
      setfilters([...products]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const searched = products.filter((prod) =>
      selectedCategory.length !== 0
        ? prod.title.toLowerCase().includes(searchcontent.toLowerCase()) &&
          prod.category === selectedCategory
        : prod.title.toLowerCase().includes(searchcontent.toLowerCase())
    );

    if (searched.length > 0) {
      setfilters(searched);
    } else {
      setfilters([]);
    }
  }, [searchcontent]);

  return (
    <>
      <div className="mt-5">
        <div className="title text-3xl font-bold text-center">Products</div>
        <hr className="w-full m-4" />
      </div>

      <div className="prod-card grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-2">
        {filters.length > 0 ? (
          filters.map((prod) => (
            <div
              key={prod.id}
              className="product-item border-[2px] border-solid flex justify-start items-center flex-col max-h-screen cursor-pointer"
            >
              <Link href={`/product/${prod.id}`}>
                <div title={prod.title}>
                  <div className="">
                    <Image
                      className="product-image h-44 w-56 object-contain"
                      src={prod.image}
                      alt={prod.title}
                      width={224}
                      height={176}
                    />
                  </div>
                  <div className="prod-name font-bold text-ellipsis overflow-clip w-52 text-nowrap text-center m-2">
                    {prod.title}
                  </div>
                  <hr />
                  <div className="prod-price flex justify-between items-center">
                    <div className="font-bold">price: </div>
                    <div className="text-red-500 font-bold">${prod.price}</div>
                  </div>
                </div>
              </Link>
              <button
                className="prod-add border font-bold border-gray-500 border-solid rounded-md p-2 m-3 hover:bg-gray-500 transition-colors duration-500"
                type="submit"
                onClick={() => {
                  handleaddtocart(prod);
                }}
              >
                {/* <AddShoppingCartIcon className="cart-ico" alt="Add to cart" /> */}
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <>
            {Array.from({ length: 12 }).map((_, ind) => {
              return (
                <div
                  key={ind}
                  className="flex flex-col justify-center items-center animate-pulse border border-solid border-gray-400"
                >
                  <div className="bg-[#dddddd] rounded-md w-40 h-40  my-3"></div>
                  <div className="bg-[#dddddd] w-72 h-5 mb-2"></div>
                  <div className="bg-[#dddddd] w-72 h-5 mb-2"></div>

                  <div className="bg-[#dddddd] w-40 h-10 mb-2"></div>
                </div>
              );
            })}
          </>

          // <SkeletonTheme baseColor="#dddddd" highlightColor="#f5f5f5">
          //   <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-2 text-center">
          //     <div>
          //       <Skeleton width={50} height={50} circle={true} />
          //       <Skeleton width={200} count={3} />
          //     </div>
          //   </div>
          // </SkeletonTheme>
          // <div className="waiting-circle flex justify-center items-center h-64 col-span-full">
          //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          // </div>
        )}
      </div>
    </>
  );
}
