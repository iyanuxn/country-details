// CountryDetails.js
import React from "react";

const CountryDetails = ({ country, onClose, className }) => {
  return (
    <div
      className={`bg-white w-screen h-screen text-slate-800 dark:bg-slate-700 dark:text-white rounded-md shadow-md px-6 py-5 ${className}`}
    >
      <button className="mb-5 text-sm font-semibold" onClick={() => onClose()}>
        Close
      </button>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="object-cover h-40 w-full mb-4"
      />
      <h2 className="text-xl font-bold mb-3">{country.name.common}</h2>
      <div className="text-sm gap-1 flex flex-col">
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
  );
};

export default CountryDetails;
