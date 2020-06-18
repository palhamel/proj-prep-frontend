import React from "react";

// import "./kits_style.css";

// import { NewsWho } from '../components/NewsWho'
import { NewsText } from '../components/NewsText'

// List all posts from API:
export const NewsList = () => {

  return (
    <div className="kits-continer">
      <h2>Nyheter Lista</h2>
      {/* <NewsWho /> */}
      <NewsText />
    </div>
  );
};
