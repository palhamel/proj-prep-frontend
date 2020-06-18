import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
// import "./kitlist_style.css";

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
  console.log("covidStats:", covidStats);

  return (
    <div>
      <h3>Covid-19 statistik - rapporterat:</h3>
      <article className="kit-card">
        <h4>Currently infected: {covidStats.currently_infected}</h4>
        <h4>Recovery cases: {covidStats.recovery_cases}</h4>
        <h4>Total cases: {covidStats.total_cases}</h4>
        <h4>Death cases: {covidStats.death_cases}</h4>
        <h4>Last update: {covidStats.last_update}</h4>
      </article>
    </div>
  );
};
