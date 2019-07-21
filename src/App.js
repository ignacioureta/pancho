import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => (props.color ? props.color : "#cacaca")};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

function App() {
  return (
    <>
      <Container color={"#f46969"}>
        <div>pancho</div>
      </Container>
      <Container color={"#f4f4f4"}>
        <div>pancho</div>
      </Container>
      <Container color={"#91b5d6"}>
        <div>pancho</div>
      </Container>
    </>
  );
}

export default App;
