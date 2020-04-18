import React from 'react';
import { Todo } from '../types';

const todosInitialValue: Todo[] = [
  { title: 'lorem in', isCompleted: true },
  { title: '2adsfasdf', isCompleted: false },
  { title: 'asdfadsfasdfsadf 3', isCompleted: false },
];

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

  const addTodo = React.useCallback((todo: Todo) => {
    setTodos((old) => [...old, todo]);
  }, []);

  const editTodo = React.useCallback(
    (index: number, todo: Todo) => {
      const draft = [...todos];
      draft[index] = todo;
      setTodos(draft);
    },
    [todos]
  );

  const deleteTodo = React.useCallback(
    (index: number) => {
      const draft = [...todos];
      draft.splice(index, 1);
      setTodos(draft);
    },
    [todos]
  );

  return { addTodo, todos, editTodo, deleteTodo };
};
