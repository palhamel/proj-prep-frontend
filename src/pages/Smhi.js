import React from "react";
import { SmhiMessage } from "../components/SmhiMessage";
import { SmhiAlerts } from "../components/SmhiAlerts";
// import { WeatherComp } from "../components/WeatherComp";

export const Smhi = () => {
  return (
    <div>
      <h2>SMHI Page</h2>
      {/* <WeatherComp /> */}
      <SmhiMessage />
      <SmhiAlerts />
    </div>
  );
};
