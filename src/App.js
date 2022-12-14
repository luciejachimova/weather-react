import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <h1 className="text-center">Weather App</h1>
        <Weather defaultCity="Prague" />
        <footer>
          This project was coded by Lucie Jáchimová and is{" "}
          <a
            href="https://github.com/luciejachimova/weather-react"
            target="_blank"
            rel="nooper noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
