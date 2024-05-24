import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <form className="bg-slate-400 relative w-[250px] rounded-md overflow-auto">
        <input
          type="text"
          placeholder="Search...."
          name="query"
          className="py-1 px-2 rounded-md w-full outline-none text-gray-400"
        />
        <button className="absolute top-2 right-1">
          <FaSearch size={18} color="gray" />
        </button>
      </form>
    </div>
  );
};

export default Search;
