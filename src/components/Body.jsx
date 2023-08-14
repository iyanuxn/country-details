import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Cards from "./Cards";
import CountryDetails from "./CountryDetails";

const Body = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null); // Add this state

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null); // Reset selected country when changing region
  };

  const handleSearch = (input) => {
    setSearchInput(input);
    setSelectedCountry(null); // Reset selected country when performing a search
  };

  const handleCardClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex flex-col gap-7 md:gap-14 px-5 md:px-16 py-10">
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : (
        <>
          <SearchFilter
            onRegionSelect={handleRegionSelect}
            onSearch={handleSearch}
          />
          <Cards
            selectedRegion={selectedRegion}
            searchInput={searchInput}
            onCardClick={handleCardClick}
          />
        </>
      )}
    </div>
  );
};

export default Body;
