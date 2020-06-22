import React, { useState, useEffect } from "react";
import dayjs from 'dayjs'
import "../pages/kitlist_style.css";


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
    <div className="kits-container">
      {/* <h2>WHO</h2> */}
      <h1>WHO - senaste nyheterna:</h1>
      {news.slice(0, 8).map((news) => (

        <article className="kit-card effect2" key={news.pubDate}>
          <p className="kit-details">{dayjs(news.pubDate).format('YYYY-MM-DD')}</p>
          <p className="text-highlight">{news.title}</p>
          <section>
            <a className="link-text-inline" href={news.link} target="_blank" rel="noopener noreferrer">Läs mer - (extern länk, WHO)</a>
          </section>
        </article>
      ))}

    </div>
  );
};
