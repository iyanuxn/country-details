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
      className={`bg-white min-h-screen gap-16 flex flex-col w-screen h-screen text-slate-800 dark:bg-slate-700 dark:text-white rounded-md shadow-md px-16 pt-32 pb-10 overflow-y-auto ${className}`}
    >
      <button
        className="w-max text-sm font-semibold flex items-center gap-2 justify-center border border-slate-100 rounded-md px-8 py-2 shadow-md"
        onClick={() => onClose()}
      >
        <BsArrowLeft />
        Back
      </button>
      <div className="flex flex-row h-max justify-between">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="object-cover w-[40vw] h-[50vh]  border-slate-300 border"
        />
        <div className="flex flex-col gap-3 w-1/2 justify-center text-slate-800">
          <h2 className="text-3xl font-bold mb-3">{country.name.common}</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 font-bold">
              <p>
                <span>Native Name: </span>
                <span className="font-normal">
                  <span>
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].common
                    }
                  </span>
                </span>
              </p>
              <p>
                <span>Population:</span>{" "}
                <span className="font-normal">{country.population}</span>
              </p>
              <p>
                <span>Region:</span>{" "}
                <span className="font-normal">{country.region}</span>
              </p>
              <p>
                <span>Sub Region:</span>{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p>
                <span>Capital:</span>{" "}
                <span className="font-normal">{country.capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 font-bold">
              <p>
                <span>Top Level Domain:</span>{" "}
                <span className="font-normal">{country.tld.join(", ")}</span>
              </p>
              <p>
                <span>Currencies:</span>{" "}
                <span className="font-normal">
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </span>
              </p>
              <p>
                <span>Languages:</span>{" "}
                <span className="font-normal">
                  {Object.values(country.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 w-full">
            <div className="font-bold w-1/4">
              <span>Border Countries:</span>
            </div>
            <div className="flex flex-wrap justify-start w-10/12 gap-2">
              {borders.map((borderCountry, index) => (
                <button
                  key={index}
                  className="text-sm border rounded-md px-5 py-2 shadow-md border-slate-100 hover:bg-gray-200 transition duration-300 ease-in-out"
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
