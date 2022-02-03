import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <>
        <h2>
          <span> {props.celsius}</span>
          <a href="/" className="active">
            {" "}
            °C
          </a>{" "}
          |
          <a href="/" className="passiv" onClick={showFahrenheit}>
            °F
          </a>
        </h2>
      </>
    );
  } else {
    return (
      <>
        <h2>
          <span> {calculateFahrenheit()}</span>
          <a href="/" className="active">
            {" "}
            °F
          </a>{" "}
          |
          <a href="/" className="passiv" onClick={showCelsius}>
            °C
          </a>
        </h2>
      </>
    );
  }
}
