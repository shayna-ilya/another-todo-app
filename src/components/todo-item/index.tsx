import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';

type Props = {
  data: Todo;
  handleCheckboxChange(value: boolean): void;
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const Title = styled.p<{ isCompleted: boolean }>`
  font-size: 2vh;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  color ${(props) => (props.isCompleted ? 'gray' : '#111')};
`;

export const TodoItem: React.FC<Props> = ({ data }) => {
  const { isCompleted, title } = data;

  const handleCheckboxChange = React.useCallback(() => {}, []);

  return (
    <Container>
      <Title isCompleted={isCompleted}>{title}</Title>
      <Checkbox checked={isCompleted} onChange={handleCheckboxChange} />
    </Container>
  );
};
