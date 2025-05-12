import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-violet-50 shadow-lg border-l border-violet-200 z-50 transition-transform duration-500 ease-in-out ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-indigo-700">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-xl border-2 border-indigo-400 text-indigo-600 p-1 rounded-md cursor-pointer hover:text-red-400 hover:border-red-400"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-center text-lg font-semibold text-indigo-600">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-violet-200">
          <h3 className="font-semibold text-indigo-700">Items : {totalQty}</h3>
          <h3 className="font-semibold text-indigo-700">
            Total Amount : ₹{totalPrice}
          </h3>
          <hr className="my-2 border-violet-300" />
          <button
            onClick={() => navigate("/success")}
            className="bg-indigo-500 font-semibold text-white py-2 rounded-lg w-full hover:bg-indigo-600 transition"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-4 right-4 bg-white text-indigo-600 text-4xl p-3 rounded-full shadow-md border border-indigo-300 cursor-pointer ${
          totalQty > 0 ? "animate-bounce" : ""
        }`}
      />
    </>
  );
};

export default Cart;