import React from "react";

const CountryDetails = ({ country }) => {
  return (
    <div className="bg-white text-slate-800 dark:bg-slate-700 dark:text-white rounded-md shadow-md px-6 py-5">
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
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CountryDetails;
