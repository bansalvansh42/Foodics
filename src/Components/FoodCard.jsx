
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] bg-white p-4 flex flex-col rounded-xl shadow-lg transition-transform hover:scale-105 border border-violet-100">
      <img
        src={img}
        alt={name}
        className="w-full h-[130px] object-contain rounded-md mb-3"
      />
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-base font-semibold text-gray-800">{name}</h2>
        <span className="text-indigo-600 font-bold">₹{price}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <span className="text-yellow-500 flex items-center text-sm font-medium">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, price, img, qty: 1 }));
            handleToast(name);
          }}
          className="bg-indigo-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-indigo-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;