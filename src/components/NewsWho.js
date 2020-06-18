import React, { useState, useEffect } from "react";
import dayjs from 'dayjs'
// import "./kitlist_style.css";

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
    <div>
      {/* <h2>WHO</h2> */}
      <h3>WHO - senaste uppdateringarna:</h3>
      {news.slice(0, 5).map((news) => (
        <article className="kit-card" key={news.pubDate}>
          <h4>{dayjs(news.pubDate).format('YYYY-MM-DD')}</h4>
          <a href={news.link} target="_blank" rel="noopener noreferrer"><h3>{news.title}</h3></a>
        </article>
      ))}

    </div>
  );
};
