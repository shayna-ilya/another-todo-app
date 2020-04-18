import React from 'react';
import styled from 'styled-components';
import { TodoList } from './components/todo-list';
import { Todo } from './types';

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const todos: Todo[] = [
  { title: 'lorem in', isCompleted: true },
  { title: '2adsfasdf', isCompleted: false },
  { title: 'asdfadsfasdfsadf 3', isCompleted: false },
];

const App = () => {
  return (
    <AppContainer>
      <TodoList todos={todos} />
    </AppContainer>
  );
};

export default App;
