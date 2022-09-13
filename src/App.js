import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
