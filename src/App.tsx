import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button>Hello world</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
