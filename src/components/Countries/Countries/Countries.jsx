import React, { use, useState } from "react";
import Conutry from "../Countrie/Conutry";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([])

  const countries = use(countriesPromise);

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>Traveling Countries: {countries.length}</h1>
      <h2>Traveled so far: {visitedCountries.length}</h2>
      <div className="flag">
         {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
         }
      </div>
      <ol>
        {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </ol>

      <div className="contries">
        {countries.map((country) => (
          <Conutry
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Conutry>
        ))}
      </div>
    </div>
  );
};
export default Countries;
