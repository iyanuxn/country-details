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

  const handleBorderClick = (borderCountry) => {
    fetchCountryfromName(borderCountry);
  };

  // FIXME: Prolly network?

  const fetchCountryfromName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountry(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
      });
  };

  const handleCardClose = () => {
    setAnimation("slide-out-regular");
    setTimeout(() => {
      setSelectedCountry(null);
      document.body.style.overflow = "auto";
    }, 250);
  };

  return (
    <div className="relative flex flex-col gap-7 md:gap-14 px-5 md:px-16 py-32">
      {selectedCountry && (
        <div className="fixed inset-0 z-20  flex items-center justify-center">
          <CountryDetails
            country={selectedCountry}
            onClose={handleCardClose}
            className={animation}
            onBorderClick={handleBorderClick}
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
