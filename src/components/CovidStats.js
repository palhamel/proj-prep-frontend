import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
import "../pages/kits_style.css";

// List all posts from API:
export const CovidStats = () => {
  // URL to API as const:
  const apiURL =
    "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";
  const [covidStats, setCovidStats] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setCovidStats(json.data));
  }, [apiURL]);
  // console.log('covidStats:', covidStats);

  return (
    <div>
      <h3>Covid Stats:</h3>
      <article className="kit-card">
        <h4>{covidStats.last_update}</h4>
        {/* <h4>{dayjs(covidStats.last_update).format('YYYY')}</h4> */}
        <h4>currently_infected: {covidStats.currently_infected}</h4>
        <h4>death_cases: {covidStats.death_cases}</h4>
        <h4>recovery_cases: {covidStats.recovery_cases}</h4>
        <h4>{covidStats.text}</h4>
        <p>Kan man visualisera?</p>
      </article>

      {/*       {news.slice(0, 5).map((news) => (
        <article className="kit-card" key={news.pubDate}>
          <h4>{dayjs(news.pubDate).format('YYYY-MM-DD')}</h4>
          <a href={news.link} target="_blank" rel="noopener noreferrer"><h3>{news.title}</h3></a>
        </article>
      ))} */}
    </div>
  );
};
