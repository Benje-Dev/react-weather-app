import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Berlin" />
      </div>
      <footer className="footer">
        <a
          href="https://github.com/Benje-Dev/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Open-source code {""}
        </a>
        by Jasmin Labidi
      </footer>
    </div>
  );
}
