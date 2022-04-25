import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div>
      <div>
        <h1>What would you like to search for today?</h1>
        <Dictionary />{" "}
      </div>
      <a href="https://github.com/sastubblefield" target="none">
        open sources code
      </a>
    </div>
  );
}

export default App;
