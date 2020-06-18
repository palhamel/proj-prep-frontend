import React, { useState, useEffect } from "react";
import dayjs from 'dayjs'

// import "../kitlist_style.css";

// List all posts from API:
export const NewsText = () => {
  // URL to API as const:
  const apiURL = "http://api.texttv.nu/api/get/108-112?app=apiexempelsidan";
  const [news, setNews] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json));
  }, [apiURL]);
  console.log(news);

  return (
    <div className="kits-continer">
      <h2>SVT Text-TV</h2>
      {news.map((kit) => (
        <article className="kit-card" key={kit.id}>
          {/* <h3>{kit.num}</h3> */}
          <h3>{kit.title}</h3>
          {/* <h4>Uppdaterat: {kit.date_updated_unix}</h4> */}
          <h4>Publicerat: {dayjs.unix(kit.date_updated_unix).format('YYYY-MM-DD')}</h4>

          <h4>
            Läs mer: <a href={kit.permalink} target="_blank" rel="noopener noreferrer">extern länk</a>
          </h4>
        </article>
      ))}
    </div>
  );
};
