import React, { useState, useEffect } from "react";

import './kits_style.css'

// List all posts from API:
export const Kits = () => {
  // URL to API as const:
  const apiURL = "http://localhost:8080/kits";
  const [kits, setKits] = useState([]);
  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setKits(json));
  }, []);
  console.log(kits);

  return (
    <div className="kits-continer">
      <h2>Kits Page</h2>
      {kits.map((kit) => (
        <article className="kit-card" key={kit._id}>
          <h3>{kit.name}</h3>
          <h4>{kit.description}</h4>
          <h4>Innehåll i lådan:</h4>
          <h4>{kit.content}</h4>
          <h4>Produkttyp:{kit.category}</h4>
          <h4>För antal personer: {kit.for_persons}</h4>
          <h4>För antal dagar: {kit.for_days}</h4>
          <h4>Antal kalorier/dag: {kit.nutrition_cal}</h4>
        </article>
      ))}
    </div>
  );
};
