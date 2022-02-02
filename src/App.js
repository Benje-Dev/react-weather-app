import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="London"/>
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

export default App;
