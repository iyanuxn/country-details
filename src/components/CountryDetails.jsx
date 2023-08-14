// CountryDetails.js
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = ({ country, onClose, className }) => {
  return (
    <div
      className={`bg-white w-screen h-screen text-slate-800 dark:bg-slate-700 dark:text-white rounded-md shadow-md px-6 pt-40 pb-5 ${className}`}
    >
      <button className="mb-5 text-sm font-semibold" onClick={() => onClose()}>
        <BsArrowLeft />
        Back
      </button>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="object-cover h-40 w-full mb-4"
      />
      <h2 className="text-xl font-bold mb-3">{country.name.common}</h2>
      <div className="text-sm gap-1 flex flex-col overflow-y-auto">
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
