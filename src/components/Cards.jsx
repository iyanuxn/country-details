import React, { useState, useEffect } from "react";

const Cards = ({ selectedRegion, searchInput }) => {
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
    if (searchInput && !country.name.common.toLowerCase().includes(searchInput.toLowerCase())) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(filterCountries);

  return (
    <div className="card-container">
      {filteredCountries.map((country, index) => (
        <div key={index} className="card">
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <h2>{country.name.common}</h2>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
