import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    const conversation = conversations.find((con) => con.username.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No User found with this username");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center lg:justify-normal ">
        <input
          type="search"
          
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full text-white px-4 py-2 bg-[#e9e1e532] shadow-sm shadow-slate-500 w-[18rem] lg:w-[23rem]"
          key="search-input"
          aria-label="Search input"
        />

        <button
          type="submit"
          className="bg-gray-700 rounded-full text-white p-3"
          key="search-button"
          aria-label="Search button"
        >
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
