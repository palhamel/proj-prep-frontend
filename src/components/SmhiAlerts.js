import React, { useState, useEffect } from "react";
// import dayjs from "dayjs";
import "../pages/kitlist_style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

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
  console.log("SMHI Alerts:", smhi);

  return (
    <div className="kits-container">
      <h1>SMHI - aktuella varningar:</h1>
      <p>
        Varningarna delas in i olika klasser beroende på hur allvarligt vädret
        väntas bli. Alla väderfenomen omfattas inte av alla tre nivåerna.
      </p>
      <section className="text-box-focus">
        <p>Vädervarning klass 1</p>
        <p>
          {" "}
          Väderutveckling väntas som innebär vissa risker för allmänheten och
          störningar för en del samhällsfunktioner.{" "}
        </p>
        <p>Vädervarning klass 2</p>
        <p>
          Väderutveckling väntas som kan innebära fara för allmänheten, stora
          materiella skador och stora störningar i viktiga samhällsfunktioner.
          Allmänheten uppmanas att följa upp ny information på internet, radio
          eller TV.{" "}
        </p>
        <p>Vädervarning klass 3</p>
        <p>Mycket extremt väder väntas som kan innebära stor
        fara för allmänheten och mycket stora störningar i viktiga
        samhällsfunktioner. Allmänheten uppmanas att följa upp ny information på
        internet, radio eller TV.</p>
      </section>
      {smhi.map((alert) => (
        <article className="kit-card effect2" key={alert.identifier}>
          <p className="kit-description text-alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />{" "}
            {alert.info.eventCode[3].value}
          </p>
          <p className="kit-description">{alert.info.headline}</p>
          <p className="kit-details">{alert.info.description}</p>
          {/* <h3>{alert.info.eventCode[1].value}</h3> */}
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

          {/* Date objects: */}
          {/*           <p className="kit-details">
            {" "}
            Skapad: {dayjs(alert.sent).format("YYYY-MM-DD")}
          </p>
          <p className="kit-details"> Senast uppdaterat: {(alert.code[1]).replace(/\D+/g, '')}</p> */}
        </article>
      ))}
    </div>
  );
};
