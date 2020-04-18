import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import { TodoItem } from '../todo-item';

type Props = {
  todos: Todo[];
};

const Container = styled.div`
  background-color: #fff;
  width: 1100px;
  min-height: 80vh;
  border-radius: 1vw;
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

export const TodoList: React.FC<Props> = ({ todos }) => {
  const renderTodos = () => {
    return todos.map((todo, index) => {
      return (
        <TodoItem
          handleCheckboxChange={() => null}
          data={todo}
          key={String(index)}
        />
      );
    });
  };

  return (
    <Container>
      <Header>
        <HeaderDate>{new Date().toDateString()}</HeaderDate>
      </Header>
      <Content>
        <Title>To do List</Title>
        <TodosList>{renderTodos()}</TodosList>
      </Content>
    </Container>
  );
};
