import Container from "react-bootstrap/Container";

import TodoContainer from "./components/TodoContainer";

function App(): JSX.Element {
  return (
    <Container className="p-5">
      <TodoContainer ></TodoContainer>
    </Container>
  )
}

export default App;
