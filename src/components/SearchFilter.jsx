import React, { useState, useRef, useEffect } from "react";
import { BsSearch, BsChevronDown } from "react-icons/bs";

const SearchFilter = ({ onRegionSelect, onSearch }) => {
  const [dropdown, setDropdown] = useState("hidden");
  const [zIndex, setZIndex] = useState("-z-10");
  const [region, setRegion] = useState([]);
  const [selectedRegionText, setSelectedRegionText] =
    useState("Filter by Region");
  const [searchInput, setSearchInput] = useState("");
  const [animation, setAnimation] = useState("fade-in-regular");

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
      setDropdown(false);
      setAnimation("fade-out-regular");
      setTimeout(() => {
        setZIndex("-z-10");
      }, 100);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
      setZIndex("z-10");
      setAnimation("fade-in-regular");
    } else {
      setDropdown(false);
      setAnimation("fade-out-regular");
      setTimeout(() => {
        setZIndex("-z-10");
      }, 100);
    }
  };

  const handleRegionSelect = (selectedRegion) => {
    if (selectedRegion === "") {
      setSelectedRegionText("Filter by Region");
    } else {
      setSelectedRegionText(selectedRegion);
    }
    onRegionSelect(selectedRegion);
    setDropdown("hidden");
  };

  const handleClearFilters = () => {
    setSelectedRegionText("Filter by Region");
    onRegionSelect("");
    setDropdown("hidden");
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
      <div className="flex items-center text-sm bg-white px-5 py-3 gap-5 shadow-md rounded-md dark:bg-slate-700 dark:dark:text-slate-100">
        <BsSearch />
        <input
          type="text"
          className="w-full md:w-72 outline-none bg-transparent"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      <div className="relative">
        <div
          ref={dropdownRef}
          className="flex flex-col w-44 md:w-64 items-center text-xs  md:text-sm text-slate-800 bg-white px-5 py-3 md:gap-5 shadow-md rounded-md dark:bg-slate-700 dark:dark:text-slate-100"
        >
          <button
            className="flex justify-between items-center gap-10 w-full"
            onClick={handleDropdown}
          >
            <span className="font-semibold text-start w-full">
              {selectedRegionText}
            </span>
            {!dropdown ? (
              <BsChevronDown className="transition duration-300 ease-in-out" />
            ) : (
              <BsChevronDown className="rotate-180 transition duration-300 ease-in-" />
            )}
          </button>
          <div
            className={`flex-col absolute left-0 mt-8 md:mt-10 bg-white shadow-md rounded-md py-2 items-center w-64 overflow-hidden dark:bg-slate-700 dark:dark:text-slate-100 ${dropdown} ${animation} ${zIndex}`}
          >
            {region.map((regionName, index) => (
              <button
                className={`w-full text-left px-5 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 transition duration-300 ease-in-out`}
                key={index}
                onClick={dropdown ? () => handleRegionSelect(regionName) : null}
              >
                {regionName}
              </button>
            ))}
            {selectedRegionText !== "Filter by Region" && (
              <button
                className={`w-full text-red-500 text-left px-5 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 transition duration-300 ease-in-out`}
                onClick={dropdown ? handleClearFilters : null}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
