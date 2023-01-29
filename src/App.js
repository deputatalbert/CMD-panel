import React from "react";
import styled from 'styled-components'
import { Button } from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Title from "./components/Title";

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title color = 'green'>Console CMD 2023. INS</Title>
      </Flex>
      <Flex direction = "column">
        <Console color = {'green'}/>
        <Button outlined color = {'green'} align = 'flex-end'>Отправить</Button>
      </Flex>
      
    </AppWrapper>
  );
}

export default App;
