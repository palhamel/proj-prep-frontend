import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./kitlist_style.css";

// List all posts from API:
export const KitList = () => {
  // URL to API as const:
  const apiURL = "http://localhost:8080/kits";
  const [kits, setKits] = useState([]);

  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => setKits(json));
  }, [apiURL]);
  console.log(kits);

  return (
    <div>
      <section className="container-page">
        <h2>Kits List Page</h2>
        <p>
          Att ha en krislåda hemma för sin hemberedskap är viktigt för att kunna
          möta eventuella krissituationer eller andra störningar som kan uppstå.
          Det kan vara allt från strömavbrott till att vattnet slutar rinna ur
          kranen eller att det blivit förorenat.
        </p>
        <h4>[sort on: MAT / UTRUSTNING]</h4>
        <div className="kits-container">
          {kits.map((kit) => (
            <article className="kit-card effect2" key={kit._id}>
              <p className="kit-name">{kit.name}</p>
              <p className="kit-description">{kit.description}</p>
              <section>
                <p className="kit-details">
                  För antal personer: {kit.for_persons}
                </p>
                <p className="kit-details">För antal dagar: {kit.for_days}</p>
                <p className="kit-details">Typ: {kit.category}</p>
              </section>
              <Link className="kit-link" to={`kit/${kit._id}#top`}>
                <button>Läs mer om innehållet här</button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
