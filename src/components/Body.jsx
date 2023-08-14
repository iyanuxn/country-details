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
    <div className="flex flex-col gap-14 px-16 py-10">
      <SearchFilter onRegionSelect={handleRegionSelect} onSearch={handleSearch} />
      <Cards selectedRegion={selectedRegion} searchInput={searchInput} />
    </div>
  );
};

export default Body;
