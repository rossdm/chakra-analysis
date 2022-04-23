import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: red;
  display: block;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button colorScheme="blue">Hello world</Button>
          <StyledButton colorScheme="blue">Hello again</StyledButton>
        </p>
      </header>
    </div>
  );
}

export default App;
