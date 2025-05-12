import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-3 mb-4 bg-white relative border border-violet-100">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, { icon: "👋" });
        }}
        className="absolute right-5 top-3 text-red-500 hover:text-red-700 cursor-pointer text-lg"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px] rounded-md" />
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800 mb-1">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">₹{price}</span>
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : null
              }
              className="text-indigo-500 hover:bg-indigo-100 p-1 rounded-md border border-indigo-300 cursor-pointer"
            />
            <span className="text-gray-700 font-medium">{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="text-indigo-500 hover:bg-indigo-100 p-1 rounded-md border border-indigo-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
