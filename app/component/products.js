"use client";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Products({ category, search, onsetcart, already }) {
  const [products, setProducts] = useState([]);
  const [filters, setfilters] = useState([]);
  const [cart, setcart] = useState([]);

  function handleaddtocart(prod) {
    already(false);
    if (cart.includes(prod)) {
      already(true);
    } else {
      const updatedCart = [...cart, prod];
      setcart(updatedCart);
      onsetcart(updatedCart);
    }
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setProducts(res);
        setfilters(res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => setfilters([...products]), [products]);
  // function Filter() {
  //   products.filter((prod) => {

  //   });
  // }

  useEffect(() => {
    const filtered = products.filter((prod) => prod.category === category);
    if (filtered.length > 0) {
      setfilters(filtered);
    } else {
      setfilters([...products]);
    }
    // setsearched(filtered);
  }, [category]);

  useEffect(() => {
    const searched = products.filter((prod) =>
      category.length !== 0
        ? prod.title.toLowerCase().includes(search.toLowerCase()) &&
          prod.category === category
        : prod.title.toLowerCase().includes(search.toLowerCase())
    );

    if (searched.length > 0) {
      setfilters(searched);
    } else {
      setfilters([]);
    }
  }, [search]);

  return (
    <>
      <div className="">
        <div className="title text-3xl font-bold text-center">Products</div>
        <hr className="w-full m-4" />
      </div>

      <div className="prod-card grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {filters.length > 0 ? (
          filters.map((prod) => (
            <div
              className="product-item border-[2px] border-solid flex justify-start items-center flex-col max-h-screen"
              key={prod.id}
            >
              <div className="">
                <img
                  className="product-image h-44 w-56 object-contain"
                  src={prod.image}
                  alt={prod.title}
                />
              </div>
              <div className="prod-name text-ellipsis overflow-clip w-52 text-nowrap text-center m-2">
                {prod.title}
              </div>
              <div className="prod-price">${prod.price}</div>
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
          <div className="waiting-circle"></div>
        )}
      </div>
    </>
  );
}
