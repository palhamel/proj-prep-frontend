import React, { useState, useEffect } from "react";
import moment from 'moment'

import "../pages/kits_style.css";

// List all posts from API:
export const NewsWho = () => {
  // URL to API as const:
  const apiURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.who.int%2Frss-feeds%2Fnews-english.xml";
  const [news, setNews] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setNews(json.items));
  }, [apiURL]);
  console.log(news);

  return (
    <div className="kits-continer">
      <h2>Nyheter från WHO</h2>
      {news.slice(0, 5).map((news) => (
        <article className="kit-card" key={news.pubDate}>
          {/* <h3>{kit.num}</h3> */}
          <h3>{news.title}</h3>
          <h4>Uppdaterat: {moment(news.pubDate).format('MMM Do YY')}</h4>
          <h4>
            Läs mer: <a href={news.link} target="_blank" rel="noopener noreferrer">extern länk</a>
          </h4>
        </article>
      ))}

    </div>
  );
};
