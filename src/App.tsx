import styled from "styled-components";
import { Flex, Text, Button } from "@radix-ui/themes";
function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
        <Test>12431</Test>
      </Flex>
    </>
  );
}

const Test = styled("div")`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default App;
