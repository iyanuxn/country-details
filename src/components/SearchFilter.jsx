import React, { useState, useRef, useEffect } from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";

const indexContent = () => {
  const [dropdown, setDropdown] = useState("hidden");
  const [region, setRegion] = useState([]);

  const dropdownRef = useRef(null);

  const fetchRegions = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const newRegions = [];

        data.forEach((country) => {
          if (country.region && !newRegions.includes(country.region)) {
            newRegions.push(country.region);
          }
        });

        setRegion(newRegions);
      })
      .catch((error) => {
        console.error("Error fetching regions:", error);
      });
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    if (dropdown === "hidden") {
      setDropdown("flex");
    } else {
      setDropdown("hidden");
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex w-max items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md dark:bg-slate-700 dark:text-white">
        <BsSearch />
        <input
          type="text"
          className="w-72 outline-none bg-transparent"
          placeholder="Search for a country..."
        />
      </div>
      <div className="relative">
        <div
          ref={dropdownRef}
          className="flex flex-col w-max items-center text-sm text-slate-800 bg-white px-5 py-3 gap-5 shadow-md rounded-md dark:bg-slate-700 dark:text-white"
        >
          <button
            className="flex justify-between items-center gap-10  w-full"
            onClick={handleDropdown}
          >
            <span className="font-semibold w-full">Filter by Region</span>
            {dropdown === "hidden" ? (
              <BsChevronDown className="transition duration-300 ease-in-out" />
            ) : (
              <BsChevronDown className="rotate-180 transition duration-300 ease-in-" />
            )}
          </button>
          <div
            className={`flex-col absolute mt-9 bg-white shadow-md rounded-md py-2 items-center w-full fade-in-regular overflow-hidden dark:bg-slate-700 dark:text-white ${dropdown}`}
          >
            {region.map((region, index) => (
              <button
                className="w-full text-left px-5 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 transition duration-300 ease-in-out"
                key={index}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default indexContent;