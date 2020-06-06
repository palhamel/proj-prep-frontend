import React from "react";

// import '../components/Weathercomp.js'

import { openWeatherApiKey } from '../apiKeys'

export const Weather = () => {
  // const cityWeather = document.getElementById("city");
  // API KEY AND LINK:
  const weatherOneDayApi =
    `https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&units=metric&APPID=${openWeatherApiKey}&lang=en`;

  // First API - day weather
  fetch(weatherOneDayApi)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log("checking first json", json); // checking the json from open weather
      console.log("city:", json.name)
      console.log("temp:", json.main.temp)
      console.log("wind:", json.wind)

    });

  return (
    <div>
      <h2>Weather Page</h2>
      <p>..............</p>
      <p>is being fetched, see console.log</p>
      {/* <p id="city"></p> */}

    </div>
  );
};

/*
export const Weather = () => {
  return (
    <div>
      <h2>Weather Page</h2>
      <p>..............</p>

    </div>
  )
}

*/
