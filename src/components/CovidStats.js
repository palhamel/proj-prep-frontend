import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
import "../pages/kitlist_style.css";


// List all posts from API:
export const CovidStats = () => {
  // URL to API as const:
  const apiURL =
    "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";
  const [covidStats, setCovidStats] = useState([]);
/* 
  const stringDate = covidStats.last_update;
  const maxStringLenght = stringDate;
  console.log('check const', maxStringLenght) */

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.data));
  }, [apiURL]);
  // console.log("covidStats:", covidStats);

  return (
    <div className="kits-container">
      {/* <h1>Covid-19 statistik: </h1> */}
      <h1>Covid-19</h1>
      <p>Aktuella globalt bekräftade fall:</p>
      <article className="kit-card effect2">
        <p className="kit-details" >Currently infected: {covidStats.currently_infected}</p>
        <p className="kit-details">Recovery cases: {covidStats.recovery_cases}</p>
        <p className="kit-details">Total cases: {covidStats.total_cases}</p>
        <p className="kit-details">Death cases: {covidStats.death_cases}</p>
        {/* <p className="kit-details">Last update: {covidStats.last_update}</p> */}
      </article>
    </div>
  );
};
