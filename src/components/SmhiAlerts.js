import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../pages/kitlist_style.css";

// List all posts from API:
export const SmhiAlerts = () => {
  // URL to API as const:
  const apiURL =
    "https://opendata-download-warnings.smhi.se/api/version/2/alerts.json";
  const [smhi, setSmhi] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setSmhi(json.alert));
  }, [apiURL]);
  // console.log("SMHI Alerts:", smhi);

  return (
    <div className="kits-container">
      <h1>SMHI - aktuella varningar:</h1>
      {smhi.map((alert) => (
        <article className="kit-card effect2" key={alert.identifier}>
          <p className="kit-description">{alert.info.eventCode[3].value}</p>
          <p className="kit-description">{alert.info.headline}</p>
          <p className="kit-details">{alert.info.description}</p>
          {/* <h3>{alert.info.eventCode[1].value}</h3> */}
          <p className="kit-details">
            {" "}
            Skapad: {dayjs(alert.sent).format("YYYY-MM-DD")}
          </p>
          <p className="kit-details"> Senast uppdaterat: {(alert.code[1]).replace(/\D+/g, '')}</p>
          <section>
            <a
              className="news-link kit-link"
              href={alert.info.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Läs mer - (extern länk, SMHI)
            </a>
          </section>
        </article>
      ))}
    </div>
  );
};
