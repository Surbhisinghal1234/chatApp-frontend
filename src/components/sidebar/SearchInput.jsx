import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div>
      <form className="flex gap-2"
        action="
      "
      >
        <input
          type="text"
          placeholder="search"
          className="rounded-full px-4 py-2 bg-gray-800 "
        />

        <button type="submit" className="bg-gray-700 rounded-full text-white p-3">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
