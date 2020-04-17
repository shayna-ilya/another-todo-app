import React from 'react';
import styled from 'styled-components';
import './App.css';
import { TodoList } from './components/todo-list';

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default App;
