import { useState } from "react";
import { Tooltip } from "radix-ui";
import { PlusIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`/Home?search=${encodeURIComponent(value)}`);
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
            className="pl-8 pr-4 py-1  rounded-lg  placeholder-gray-500 border border-gray-300  transition-all duration-200 focus:outline-0"
            placeholder="Search devices..."
          />

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() => navigate("/add-device")}
                  className="inline-flex size-8.75 items-center justify-center rounded-full bg-white shadow-[0_0_10px_1px] outline-0  cursor-pointer shadow-gray-300 hover:shadow-gray-400 transition-shadow duration-200"
                >
                  <PlusIcon />
                </button>
              </Tooltip.Trigger>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <h1 className="text-2xl font-bold text-gray-700">
          MoboPlus Repair System
        </h1>
      </div>
    </>
  );
};

export default Header;
