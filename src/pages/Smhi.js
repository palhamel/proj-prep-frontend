import React from "react";
import { SmhiMessage } from "../components/SmhiMessage";
import { SmhiAlerts } from "../components/SmhiAlerts";
// import { WeatherComp } from "../components/WeatherComp";

import "./kitlist_style.css";

export const Smhi = () => {
  return (
    <div>
      <section className="container-page">
        <h2>SMHI Page</h2>
        <div className="kits-container">
          {/* <WeatherComp /> */}
          <SmhiMessage />
          <SmhiAlerts />
        </div>
      </section>
    </div>
  );
};
