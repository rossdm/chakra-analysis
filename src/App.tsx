import "./App.css";
import { Button, SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: red;
  display: block;
`;

function App() {
  return (
    <SimpleGrid
      width="100vw"
      height="100vh"
      gap="12"
      justifyContent="center"
      alignContent="center"
    >
      <Button colorScheme="blue">Blue button</Button>
      <StyledButton colorScheme="blue">
        Button w/ overrides from styled-components
      </StyledButton>
      <Button>Button w/ applied defaults</Button>
      <Button size="xl">Button w/ custom XL size</Button>
    </SimpleGrid>
  );
}

export default App;
