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
        <h2>Krislådor</h2>
        <section className="text-box-focus">
          <h1>
            Allt du behöver för att klara dig.
          </h1>
        </section>
        <p>
          Att ha en krislåda hemma för sin hemberedskap är viktigt för att kunna
          möta eventuella krissituationer eller andra störningar som kan uppstå.
          Det kan vara allt{" "}
          <span className="text-highlight">
            från strömavbrott till att vattnet slutar rinna ur kranen
          </span>{" "}
          eller att det blivit förorenat.
        </p>
        {/* <h4>[sort on: MAT / UTRUSTNING]</h4> */}
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
                <p className="kit-details">Pris: {kit.average_cost},-</p>

              </section>

{/*               <Link className="kit-link" to={`kit/${kit._id}`}>
                <button>Läs mer om innehållet här</button>
              </Link> */}

              <Link className="kit-link" to={`kit/${kit._id}`}>
                <div className="btn">Läs mer om innehåll</div>
              </Link>

              {/*               <a
              className="btn kit-link"
              href="https://criseq.se/produkt-kategori/beredskapslada-krislada/"
              rel="noopener noreferrer"
              target="_blank"
            >Vad lådan innehåller</a> */}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
