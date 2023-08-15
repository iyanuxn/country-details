import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = ({ country, onClose, className, onBorderClick }) => {
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const fetchBorderNames = async () => {
      const borderNamesPromises = country.borders.map((border) => {
        return getFullNameForCountryCode(border).then((fullName) => fullName);
      });

      Promise.all(borderNamesPromises)
        .then((borderNames) => {
          setBorders(borderNames);
        })
        .catch((error) => {
          console.error("Error fetching border country names:", error);
        });
    };

    fetchBorderNames();
  }, [country.borders]);

  const getFullNameForCountryCode = (countryCode) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        const fullName = data[0]?.name?.common || "Unknown";
        return fullName;
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        return "Unknown";
      });
  };

  return (
    <div
      className={`bg-white min-h-screen gap-8 md:gap-16 flex flex-col w-screen h-screen text-slate-800 dark:bg-slate-800 dark:dark:text-slate-100 rounded-md shadow-md pt-28 px-5 md:px-16 md:pt-32 pb-10 overflow-y-auto ${className}`}
    >
      <button
        className="w-max text-xs md:text-sm font-semibold flex items-center gap-2 justify-center dark:bg-slate-700 border border-slate-100 dark:border-none  rounded-md px-4 md:px-8 py-2 shadow-md"
        onClick={() => onClose()}
      >
        <BsArrowLeft />
        Back
      </button>
      <div className="flex flex-col md:flex-row h-max justify-between">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="object-cover md:w-[40vw] md:h-[50vh] h-[30vh]  border-slate-300 border dark:border-none"
        />
        <div className="flex flex-col mt-10 md:mt-0 gap-3 md:w-1/2 justify-center text-slate-800 dark:text-slate-100">
          <h2 className="text-3xl font-bold mb-3">{country.name.common}</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex flex-col gap-2.5 font-bold">
              <div className="flex flex-row gap-2">
                <span>Native Name: </span>
                <span className="font-normal">
                  <span>
                    {
                      country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
                    }
                  </span>
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Population:</span>{" "}
                <span className="font-normal">{country.population}</span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Region:</span>{" "}
                <span className="font-normal">{country.region}</span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Sub Region:</span>{" "}
                <span className="font-normal">{country.subregion}</span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Capital:</span>{" "}
                <span className="font-normal">{country.capital}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 font-bold">
              <div className="flex flex-row gap-2">
                <span>Top Level Domain:</span>{" "}
                <span className="font-normal">{country.tld.join(", ")}</span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Currencies:</span>{" "}
                <span className="font-normal">
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span>Languages:</span>{" "}
                <span className="font-normal">
                  {Object.values(country.languages).join(", ")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-0 gap-4 md:flex-row md:items-center mt-10">
            <div className="font-bold md:w-1/4">
              <span>Border Countries:</span>
            </div>
            <div className="flex flex-wrap justify-start md:w-10/12 gap-2">
              {borders.map((borderCountry, index) => (
                <button
                  key={index}
                  className="text-sm border rounded-md px-5 py-2 shadow-md dark:border-none dark:bg-slate-700 dark:hover:bg-slate-600 border-slate-100 hover:bg-gray-200 transition duration-300 ease-in-out"
                  onClick={() => {
                    onBorderClick(borderCountry);
                  }}
                >
                  {borderCountry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
