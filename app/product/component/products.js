"use client";
import { useEffect, useState, useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import { AppContext } from "@/app/context/appcontext";
import Link from "next/link";
export default function Products() {
  const { selectedCategory, searchcontent, setcart, setalreadyincart, cart } =
    useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [filters, setfilters] = useState([]);
  const [carting, setcarting] = useState([]);

  function handleaddtocart(prod) {
    setalreadyincart(false);
    const isProdincart = cart.some((item) => item.id === prod.id);
    if (isProdincart) {
      setalreadyincart(true);
    } else {
      setcart([...cart, prod]);
    }
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch(
          "https://fakestoreapi.in/api/products?limit=150"
        );
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

      <div className="prod-card grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
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
                  <div className="prod-name text-ellipsis overflow-clip w-52 text-nowrap text-center m-2">
                    {prod.title}
                  </div>
                  <div className="prod-price">${prod.price}</div>
                </div>
              </Link>
              <button
                className="prod-add bg-blue-200 rounded-md p-[5px] m-3 hover:bg-blue-100"
                type="submit"
                onClick={() => {
                  handleaddtocart(prod);
                }}
              >
                <AddShoppingCartIcon className="cart-ico" alt="Add to cart" />
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div className="waiting-circle flex justify-center items-center h-64 col-span-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    </>
  );
}
