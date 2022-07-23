import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
      <h1>Weather Application</h1>
      <br></br>
      <Weather />
      <br></br>
      <footer>
        Open Sourced code on
        <a href="https://app.netlify.com/sites/weather-react-prac/overview">
          Github
        </a>
        <br></br>
        <a href="https://strigenz-portfolio.netlify.app/">Portfolio Here</a>
      </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
