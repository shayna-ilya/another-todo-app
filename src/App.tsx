import React from 'react';
import styled from 'styled-components';
import { useTodoStorage } from './utils/todo-storage';
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

const App = () => {
  const { todos, addTodo, deleteTodo, editTodo } = useTodoStorage();

  return (
    <AppContainer>
      <TodoList
        todos={todos}
        onAdd={addTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </AppContainer>
  );
};

export default App;
