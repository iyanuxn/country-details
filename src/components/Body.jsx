// Body.js
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Cards from "./Cards";
import CountryDetails from "./CountryDetails";

const Body = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [animation, setAnimation] = useState("slide-in-regular");

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
  };

  const handleSearch = (input) => {
    setSearchInput(input);
    setSelectedCountry(null);
  };

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setAnimation("slide-in-regular");
    document.body.style.overflow = "hidden";
  };

  const handleCardClose = () => {
    setAnimation("slide-out-regular");
    setTimeout(() => {
      setSelectedCountry(null);
      document.body.style.overflow = "auto";
    }, 250);
  };

  return (
    <div className="relative flex flex-col gap-7 md:gap-14 px-5 md:px-16 py-10">
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CountryDetails
            country={selectedCountry}
            onClose={handleCardClose}
            className={animation}
          />
        </div>
      )}
      <SearchFilter
        onRegionSelect={handleRegionSelect}
        onSearch={handleSearch}
      />
      <Cards
        selectedRegion={selectedRegion}
        searchInput={searchInput}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default Body;
