import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../pages/kits_style.css";

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
    <div>
      <h3>SMHI - aktuella varningar:</h3>
      {smhi.map((alert) => (
        <article className="kit-card" key={alert.identifier}>
          <h3>{alert.info.eventCode[3].value}</h3>
          <h3>{alert.info.headline}</h3>
          <h4>{alert.info.description}</h4>
          {/* <h3>{alert.info.eventCode[1].value}</h3> */}
          <h4> Skapad: {dayjs(alert.sent).format("YYYY-MM-DD")}</h4>
          <h4>
            <a href={alert.info.web} target="_blank" rel="noopener noreferrer">
              Läs mer - extern länk
            </a>
          </h4>
        </article>
      ))}
    </div>
  );
};
