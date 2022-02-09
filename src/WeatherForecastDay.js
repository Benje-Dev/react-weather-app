import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <span className ="WeatherForecastDay">
      <h3 className="forecast-day">{day()}</h3>
      <span className="icon-forecast">
        <WeatherIcon code={props.data.weather[0].icon} size={60} />
      </span>

      <p>
        <span className="forecast-temp-max">{maxTemperature()}</span>/
        <span className="forecast-temp-min"> {minTemperature()}</span>
      </p>
    </span>
  );
}
