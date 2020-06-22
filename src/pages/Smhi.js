import React from "react";
import { SmhiMessage } from "../components/SmhiMessage";
import { SmhiAlerts } from "../components/SmhiAlerts";
// import { WeatherComp } from "../components/WeatherComp";

import "./kitlist_style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";


export const Smhi = () => {
  return (
    <div>
      <section className="container-page">
        <h2>SMHI <FontAwesomeIcon icon={faCloudSunRain} size="1x" /></h2>
        <p>
          Vädret i Sverige övervakas dagligen av Sveriges meteorologiska och
          hydrologiska institut, SMHI. En av SMHI:s viktigaste uppgifter är att
          varna för oväder för att skydda liv och egendom.
        </p>
        <div className="kits-container">
          {/* <WeatherComp /> */}
          <SmhiMessage />
          <SmhiAlerts />
        </div>
      </section>
    </div>
  );
};
