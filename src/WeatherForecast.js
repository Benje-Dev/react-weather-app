import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast border-box">
        <div className="col-2 forecast-small">
          <h3 className="forecast-day">{forecast[0].dt}</h3>
          <span className="icon-forecast">
            <WeatherIcon code={forecast[0].weather[0].icon} size={60} />
          </span>

          <p>
            <span className="forecast-temp-max">{forecast[0].temp.max}°</span>/
            <span className="forecast-temp-min"> {forecast[0].temp.min}°</span>
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "c44934c642c3483fcd8e0c09684b9fbc";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
