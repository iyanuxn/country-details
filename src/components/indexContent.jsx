import { useState } from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";

const indexContent = () => {
  const [dropdown, setDropdown] = useState("hidden");

  const handleDropdown = () => {
    if (dropdown === "hidden") {
      setDropdown("flex");
    } else {
      setDropdown("hidden");
    }
  };

  return (
    <div className="bg-gray-100 px-16 py-10">
      <div className="flex justify-between items-center">
        <div className="flex w-max items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md">
          <BsSearch />
          <input
            type="text"
            className="w-72 outline-none"
            placeholder="Search for a country..."
          />
        </div>
        <div className="relative">
          <div className="flex flex-col w-max items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md">
            <button
              className="flex justify-between items-center gap-10  w-full"
              onClick={handleDropdown}
            >
              <span className="text-slate-800 font-semibold w-full">
                Filter by Region
              </span>
              {dropdown === "hidden" ? (
                <BsChevronDown className="transition duration-300 ease-in-out" />
              ) : (
                <BsChevronDown className="rotate-180 transition duration-300 ease-in-" />              )}
            </button>
            <div
              className={`flex-col absolute mt-9 bg-white shadow-md rounded-md px-5 py-3 gap-3 items-center w-full fade-in-regular ${dropdown}`}
            >
              <div>i'm aanananann option</div>
              <div>i'm aanananann option</div>
              <div>i'm aanananann option</div>
              <div>I was created to save streaks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default indexContent;
