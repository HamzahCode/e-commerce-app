import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/appcontext";
export default function Cart() {
  const { cart, alreadyincart } = useContext(AppContext);
  let [total, settotal] = useState(0);
  let [mycart, setmycart] = useState([]);
  let [showcart, setshowcart] = useState(false);
  function handleshow() {
    setshowcart(!showcart);
  }
  useEffect(() => {
    if (!alreadyincart) {
      setmycart(cart);
    }
  }, [cart]);
  useEffect(() => {
    let t = 0;
    mycart.forEach((cart) => {
      t += cart.price;
    });
    settotal(t);
  }, [mycart]);
  function RemoveFromviewcart(cartid) {
    const updatedViewCart = cart.filter((c) => {
      if (c.id == cartid) {
        cart.splice(cart.indexOf(c), 1);
      }
    });
    setmycart(updatedViewCart);
  }
  return (
    <>
      <div className="shopping-cart relative flex justify-center items-center">
        <div className="cursor-pointer" onClick={handleshow}>
          <ShoppingCartIcon className="proc-icons text-black relative" />
          <div
            className={
              mycart == 0
                ? "hidden"
                : "flex absolute top-[-4px] right-[-2px] justify-center select-none items-center p-1 text-white rounded-full w-[14] h-[14] bg-red-600"
            }
          >
            <div className="text-sm font-normal">
              {mycart.length > 9 ? "+9" : mycart.length}
            </div>
          </div>
        </div>

        <div
          className={
            showcart
              ? "absolute top-10 right-0 bg-white w-72 h-72 border border-solid border-black rounded-md z-10 overflow-y-auto overflow-x-hidden"
              : "hidden"
          }
        >
          <div className="flex flex-col">
            {mycart.map((carting) => {
              return (
                <div
                  className="flex relative justify-between items-center group"
                  key={carting.id}
                >
                  <div className="flex justify-center items-center m-2">
                    <div className="flex">
                      <Image
                        src={carting.image}
                        alt=""
                        width={50}
                        height={50}
                      />
                      <div className="line ml-1 border-r-[1px] border-r-gray-400 border-solid" />
                    </div>
                    <div className="info flex flex-col">
                      <div className="text-sm w-52 cursor-default text-ellipsis overflow-clip text-nowrap">
                        {carting.title}
                      </div>
                      <div className="font-bold text-base w-44 flex justify-evenly mx-1 cursor-default">
                        <div>Price:</div>
                        <div>${carting.price}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      RemoveFromviewcart(carting.id);
                      let newcart = mycart.filter((c) => c.id !== carting.id);
                      setmycart(newcart);
                    }}
                    className="cursor-pointer bg-red-500 opacity-0 group-hover:opacity-100 group-hover:right-0 ease-in duration-300 flex justify-center items-center absolute top-0 right-[-25px] h-full"
                  >
                    <DeleteIcon className="text-white" sx={{ fontSize: 20 }} />
                  </div>
                </div>
              );
            })}

            <hr />
            <div>
              <div className="text-sm font-bold text-center">
                Total: ${total}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
