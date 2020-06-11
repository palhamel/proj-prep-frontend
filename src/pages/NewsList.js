import React, { useState, useEffect } from "react";

import "./kits_style.css";

import { NewsWho } from '../components/NewsWho'
import { NewsText } from '../components/NewsText'

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
      <h2>Nyheter Lista</h2>
      <NewsWho />
      <NewsText />
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
