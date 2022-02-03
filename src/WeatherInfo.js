import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row justify-content-between">
        <div className="col-7 border-box acutal-weather">
          <div className="row justify-content-between">
            <div className="col-5">
              <h2>
                <span> {props.data.temperature}</span>
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
                  humidity: <span>{props.data.humidity}</span>%
                </li>
                <li>
                  wind: <span>{props.data.wind}</span>km/h
                </li>
              </ul>
            </div>

            <div className="col-5">
              <WeatherIcon code={props.data.icon} />
              
            </div>
          </div>
        </div>

        <div className="col-4 border-box weather-location">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
