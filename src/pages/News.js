import React, { useState, useEffect } from "react";
import moment from 'moment'

import "./kits_style.css";

// List all posts from API:
export const NewsList = () => {
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
      <h2>News Page</h2>
      <h4>(källa: SVT Text-TV API)</h4>
      {news.map((kit) => (
        <article className="kit-card" key={kit.id}>
          {/* <h3>{kit.num}</h3> */}
          <h3>{kit.title}</h3>
          {/* <h4>Uppdaterat: {kit.date_updated_unix}</h4> */}
          <h4>Uppdaterat: {moment(kit.date_updated_unix).toString()}</h4>
          <h4>
            Läs mer: <a href={kit.permalink} target="_blank" rel="noopener noreferrer">extern länk</a>
          </h4>
        </article>
      ))}
    </div>
  );
};

/*
import React, { useState, useEffect } from "react";

export const NewsList = () => {
  return (
    <div>
      <h2>News Page</h2>
      <p>..............</p>

    </div>
  )
}



*/
