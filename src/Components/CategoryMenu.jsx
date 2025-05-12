
import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="px-6 mt-5">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Find the best food</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-4 py-2 text-sm font-medium rounded-full transition duration-300 shadow-md whitespace-nowrap ${
            selectedCategory === "All"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100 hover:bg-indigo-100 text-indigo-600"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-300 shadow-md whitespace-nowrap ${
              selectedCategory === category
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 hover:bg-indigo-100 text-indigo-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;