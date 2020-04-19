import React from 'react';
import styled from 'styled-components';
import { useTodoStorage } from './utils/todo-storage';
import { TodoList } from './components/todo-list';

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

  const reversedOrderSortedTodos = React.useMemo(
    () =>
      [...todos].sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      }),
    [todos]
  );

  return (
    <AppContainer>
      <TodoList
        todos={reversedOrderSortedTodos}
        onAdd={addTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </AppContainer>
  );
};

export default App;
