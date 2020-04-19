import React from 'react';
import * as uuid from 'uuid';
import { Todo } from '../types';

export const useTodoStorage = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    const todosFromLocalstorage = localStorage.getItem('todos');
    if (todosFromLocalstorage) {
      setTodos(JSON.parse(todosFromLocalstorage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = React.useCallback((todo: Omit<Todo, 'id'>) => {
    setTodos((old) => [...old, { ...todo, id: uuid.v4() }]);
  }, []);

  const editTodo = React.useCallback(
    (todo: Todo) => {
      const draft = [...todos];
      const index = draft.findIndex((item) => item.id === todo.id);
      draft[index] = todo;
      setTodos(draft);
    },
    [todos]
  );

  const deleteTodo = React.useCallback(
    (todo: Todo) => {
      const draft = [...todos];
      const index = draft.findIndex((item) => item.id === todo.id);
      draft.splice(index, 1);
      setTodos(draft);
    },
    [todos]
  );

  return { addTodo, todos, editTodo, deleteTodo };
};
