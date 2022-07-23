import "./App.css";
import ToggleButton from "./ToggleButton";
import { DarkModeProvider } from "./context";

function App() {
  return (
    <div className="App">
      <h1>CONTEXT TEST</h1>
      <DarkModeProvider>
        <ToggleButton />
      </DarkModeProvider>
    </div>
  );
}

export default App;
