import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';

type Props = {
  data: Todo;
  onEdit(index: number, todo: Todo): void;
  onDelete(index: number): void;
  index: number;
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const Task = styled.input<{ isCompleted: boolean }>`
  font-size: 2vh;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  color ${(props) => (props.isCompleted ? 'gray' : '#111')};
  border: none;
  outline: none;
  cursor: ${(props) => (props.isCompleted ? 'default' : 'text')};
`;

export const TodoItem: React.FC<Props> = ({ data, onEdit, index }) => {
  const { isCompleted, title } = data;
  const [taskValue, setTaskValue] = React.useState<string>(title);

  const handleCheckboxChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onEdit(index, { ...data, isCompleted: e.target.checked });
    },
    [onEdit, data, index]
  );

  const handleTaskChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskValue(e.target.value);
    },
    []
  );

  const saveTaskTitle = React.useCallback(() => {
    onEdit(index, { ...data, title: taskValue });
  }, [index, data, onEdit, taskValue]);

  const handleEnterPress = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        saveTaskTitle();
      }
    },
    [saveTaskTitle]
  );

  return (
    <Container>
      <Task
        isCompleted={isCompleted}
        onChange={handleTaskChange}
        value={taskValue}
        onBlur={saveTaskTitle}
        readOnly={isCompleted}
        onKeyDown={handleEnterPress}
      />
      <Checkbox
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
    </Container>
  );
};
