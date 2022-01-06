import React from "react";
// import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Berlin",
    humidity: 80,
    wind: 10,
    description: "sun",
    temperature: 22,
    date: "Tuesday 10:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
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
                autofocus="on"
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
              <img src={weatherData.imgUrl} alt="weathe-icon" />
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
}
