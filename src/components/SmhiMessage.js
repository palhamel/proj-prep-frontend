import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../pages/kitlist_style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

// List all posts from API:
export const SmhiMessage = () => {
  // URL to API as const:
  const apiURL =
    "https://opendata-download-warnings.smhi.se/api/version/2/messages.json";
  const [smhi, setSmhi] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setSmhi(json.message));
  }, [apiURL]);
  console.log("SMHI message:", smhi);

  return (
    <div className="kits-container">
      {/* <h1>SMHI Meddelande:</h1> */}
      <article className="kit-card-wide effect2">
        <p className="kit-description text-alert"><FontAwesomeIcon icon={faExclamationTriangle} size="sm" /> Uppdaterat: {dayjs(smhi.time_stamp).format("YYYY-MM-DD kl: hh:mm")}</p>
        <p className="smhi-message-text">{smhi.text}</p>
      </article>
    </div>
  );
};
