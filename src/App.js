import { Button } from "./stories/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Trying New Components from StoryBook </p>

        <Button
          backgroundColor="rgba(241,237,255,1)"
          label="Button Globe"
          onClick={() => {}}
          primary
          size="large"
        />
      </header>
    </div>
  );
}

export default App;
