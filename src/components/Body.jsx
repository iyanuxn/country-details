import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Cards from "./Cards";

const Body = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <div className="flex flex-col gap-14 bg-gray-100 px-16 py-10 dark:bg-slate-800">
      <SearchFilter onRegionSelect={handleRegionSelect} onSearch={handleSearch} />
      <Cards selectedRegion={selectedRegion} searchInput={searchInput} />
    </div>
  );
};

export default Body;
