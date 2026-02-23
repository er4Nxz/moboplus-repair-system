import { useState } from "react";
import {  MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`?search=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <div className="w-full p-8 px-30 flex items-center justify-between gap-10 border-b  border-gray-300 shadow">
        <div className="relative flex items-center gap-4">
          <MagnifyingGlassIcon className="text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />

          <input
            type="search"
            name="searchBar"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-8 pr-4 py-1 focus:py-2 focus:pr-5 focus:pl-9  rounded-lg  placeholder-gray-500 border border-gray-300  transition-all duration-200 focus:outline-0"
            placeholder="Search devices..."
          />

          
        </div>

        <h1 className="text-2xl font-bold text-gray-600">
          MoboPlus Repair System
        </h1>
      </div>
    </>
  );
};

export default Header;
