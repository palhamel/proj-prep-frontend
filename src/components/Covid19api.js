import React, { useState, useEffect } from "react";
import "../pages/kitlist_style.css";

export const Covid19api = () => {
  const apiURL = "https://api.covid19api.com/summary";
  const [covidStats, setCovidStats] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.Global));
  }, [apiURL]);
  // console.log("covid19api.com:", covidStats);

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
