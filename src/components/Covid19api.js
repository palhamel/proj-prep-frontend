import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
import "../pages/kitlist_style.css";

// List all posts from API:
export const Covid19api = () => {
  // URL to API as const:
  const apiURL = "https://api.covid19api.com/summary";
  const [covidStats, setCovidStats] = useState([]);
  /* 
  const stringDate = covidStats.last_update;
  const maxStringLenght = stringDate;
  console.log('check const', maxStringLenght) */

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.Global));
  }, [apiURL]);
  console.log("covid19api.com:", covidStats);

  return (
    <div className="kits-container">
      <h4>Covid-19 API COM statistik - globalt & bekräftade fall:</h4>
      <p className="kit-details">Date: </p>
      <article className="kit-card effect2">
        <p className="kit-details">New confirmed cases: {covidStats.NewConfirmed}</p>
        <p className="kit-details">New death cases: {covidStats.NewDeaths}</p>
        <p className="kit-details">Total cases: {covidStats.TotalConfirmed}</p>
        <p className="kit-details">Death cases: {covidStats.TotalDeaths}</p>
      </article>
    </div>
  );
};



/*
  return (
    <div className="kits-container">
      <h4>Covid-19 statistik - globalt & bekräftade fall:</h4>
      <article className="kit-card effect2">
        <p className="kit-description" >Currently infected: {covidStats.currently_infected}</p>
        <p className="kit-details">Total cases: {covidStats.total_cases}</p>
        <p className="kit-details">Death cases: {covidStats.death_cases}</p>
        <p className="kit-details">Last update: {covidStats.last_update}</p>
      </article>
    </div>
  );
};



*/
