import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import dayjs from "dayjs";
import "../pages/kitlist_style.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// List all posts from API:
export const Covid19apiAll = () => {
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
      .then((json) => setCovidStats(json.Countries));
  }, [apiURL]);
  // console.log("covid19api.com:", covidStats);

  return (
    <div>
      <section className="container-page">
        <h2>Covid-19 statistik</h2>
        <div className="kits-container">
          <p>Data från alla länder som idag rapporterar till WHO. Uppdateras löpande.</p>
          <h4>Källa: api.covid19api.com</h4>
          <h1>Senaste statistiken</h1>

          {covidStats.map((worldStats) => (
            <article className="kit-card effect2" key={worldStats.CountryCode}>
              <p className="kit-description text-highlight">
                {worldStats.Country}
              </p>
              <p className="kit-details">
                New deaths: {worldStats.NewDeaths}
              </p>
              <p className="kit-details">
                Total deaths: {worldStats.TotalDeaths}
              </p>
              <p className="kit-details">
                Total cases: {worldStats.TotalConfirmed}
              </p>
              <p className="kit-details">
                Recovery cases: {worldStats.TotalRecovered}
              </p>
              {/* <Link
                className="link-text-inline"
                to="/who"
                tabIndex="0"
                aria-pressed="false"
              >
                Tillbaka
              </Link> */}
            </article>
          ))}
        </div>
      </section>
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
