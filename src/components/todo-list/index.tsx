import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../types';
import { TodoItem } from '../todo-item';

type Props = {
  todos: Todo[];
  onAdd(todo: Omit<Todo, 'id'>): void;
  onDelete(todo: Todo): void;
  onEdit(todo: Todo): void;
};

const Container = styled.div`
  background-color: #fff;
  width: 800px;
  min-height: 60vh;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  height: 8vh;
`;

const HeaderDate = styled.p`
  color: #a434ff;
  font-size: 2.5vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.5vh;
`;

const TodosList = styled.ul`
  list-style: none;
`;

const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTodoInput = styled.input`
  width: 20vw;
`;

export const TodoList: React.FC<Props> = ({
  todos,
  onAdd,
  onDelete,
  onEdit,
}) => {
  const [todoInputValue, setTodoInputValue] = React.useState<string>('');

  const renderTodos = () =>
    todos.map((todo) => (
      <TodoItem
        onEdit={onEdit}
        onDelete={onDelete}
        todo={todo}
        key={todo.id}
      />
    ));

  const handleAddButtonPress = React.useCallback(() => {
    onAdd({ title: todoInputValue, isCompleted: false });
    setTodoInputValue('');
  }, [onAdd, todoInputValue]);

  const handleAddTodoInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setTodoInputValue(e.target.value),
    []
  );

  return (
    <Container>
      <Header>
        <HeaderDate>{new Date().toDateString()}</HeaderDate>
      </Header>
      <Content>
        <Title>To do List</Title>
        <TodosList>{renderTodos()}</TodosList>
      </Content>
      <Footer>
        <AddTodoInput
          placeholder="add task..."
          value={todoInputValue}
          onChange={handleAddTodoInputChange}
        />
        <button onClick={handleAddButtonPress} type="button">
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </button>
      </Footer>
    </Container>
  );
};
