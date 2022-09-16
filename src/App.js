import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Lucie Jáchimová and is{" "}
          <a
            href="https://github.com/luciejachimova/weather-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
