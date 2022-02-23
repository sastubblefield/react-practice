import "./App.css";
import Form from "./Form";
import Results from "./Results";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather Search</h1>
        <Form />{" "}
      </div>
      <Results/>
    </div>
  );
}

export default App;
