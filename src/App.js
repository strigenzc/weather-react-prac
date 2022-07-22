import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <footer>
          Open Sourced code on
          <a href="https://app.netlify.com/sites/weather-react-prac/overview">
            Github
          </a>
          <br></br>
          <a href="https://strigenz-portfolio.netlify.app/">Portfolio Here</a>
        </footer>
        <Weather />
      </header>
    </div>
  );
}

export default App;
