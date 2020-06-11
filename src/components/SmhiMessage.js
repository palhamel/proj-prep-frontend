import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../pages/kits_style.css";

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
    <div>
      <h3>SMHI Meddelande:</h3>
      <article className="kit-card">
        <h4>{dayjs(smhi.time_stamp).format("YYYY-MM-DD kl: hh:mm")}</h4>
        <h4>{smhi.text}</h4>
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
