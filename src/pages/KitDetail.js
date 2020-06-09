import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./kits_style.css";

export const KitDetails = () => {
  const { kitId } = useParams();
  // console.log(kidId)
  const KIT_API_URL = `http://localhost:8080/kits/${kitId}`;

  const [kitDetail, setDetail] = useState([]);

  useEffect(() => {
    fetch(KIT_API_URL)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, [KIT_API_URL]);
  console.log(kitDetail);

  return (
    <div className="kits-continer">
      <h2>Kit Details Page</h2>
      <article className="kit-card" key={kitDetail._id}>
        <h3>{kitDetail.name}</h3>
        <h4>{kitDetail.description}</h4>
        <h4>Innehåll i lådan:</h4>
        <h4>{kitDetail.content}</h4>
        <h4>Produkttyp:{kitDetail.category}</h4>
        <h4>För antal personer: {kitDetail.for_persons}</h4>
        <h4>För antal dagar: {kitDetail.for_days}</h4>
        <h4>Antal kalorier/dag: {kitDetail.nutrition_cal}</h4>
      </article>
    </div>
  );
};

// Show details in kit:
