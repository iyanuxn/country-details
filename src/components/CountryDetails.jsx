import React from "react";

const CountryDetails = ({ country, onClose }) => {
  if (!country) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">{country.name.common}</h2>
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="object-cover h-40 w-full mb-4"
        />
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
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CountryDetails;
