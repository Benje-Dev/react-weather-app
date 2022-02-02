import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      date: "Wednesday 07:00",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-7">
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control border-box search-form"
                  placeholder="enter your city"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col-1"></div>

            <div className="col-2">
              <button type="submit" className="btn btn-primary btn-search">
                search
              </button>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary btn-current">
                current
              </button>
            </div>
          </div>
        </form>

        <div className="row justify-content-between">
          <div className="col-7 border-box acutal-weather">
            <div className="row justify-content-between">
              <div className="col-5">
                <h2>
                  <span> {weatherData.temperature}</span>
                  <a href="/" className="active">
                    {" "}
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="passiv">
                    °F
                  </a>
                </h2>
                <ul>
                  <li>
                    humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    wind: <span>{weatherData.wind}</span>km/h
                  </li>
                </ul>
              </div>

              <div className="col-5">
                <img
                  src={weatherData.icon}
                  alt="weathe-icon"
                  className="icon-actual"
                />
              </div>
            </div>
          </div>

          <div className="col-4 border-box weather-location">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "15b6771cede26fdda2ef2045a9e7c815";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
