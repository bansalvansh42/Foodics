import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-white shadow-md rounded-lg border border-violet-100">
      <div className="mb-3 lg:mb-0">
        <h3 className="text-sm text-gray-500">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-extrabold text-indigo-600">Foodics</h1>
      </div>
      <div className="w-full lg:w-[30vw]">
        <input
          type="search"
          name="search"
          placeholder="Search delicious food..."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full p-3 border border-violet-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
