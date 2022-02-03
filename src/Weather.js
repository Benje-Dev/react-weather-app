import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),

      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "15b6771cede26fdda2ef2045a9e7c815";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control border-box search-form"
                  placeholder="enter your city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleChangeCity}
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

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
