import React, { useState, useEffect } from "react";

const Cards = ({ selectedRegion, searchInput, onCardClick }) => {
  const [countries, setCountries] = useState([]);
  
  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  };

  const filterCountries = (country) => {
    if (selectedRegion && country.region !== selectedRegion) {
      return false;
    }
    if (
      searchInput &&
      !country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(filterCountries);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-0 cursor-pointer">
      {filteredCountries.map((country, index) => (
        <div
          key={index}
          className="bg-white text-slate-800 dark:bg-slate-700 dark:text-white rounded-md shadow-md overflow-hidden"
          onClick={() => onCardClick(country)}
        >
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="object-cover h-40 w-full"
          />
          <div className="px-6 py-5">
            <h2 className="text-lg md:text-xl font-bold mb-3">
              {country.name.common}
            </h2>
            <div className="text-xs md:text-sm gap-1 flex flex-col">
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
