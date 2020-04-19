import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
  onEdit(todo: Todo): void;
  onDelete(todo: Todo): void;
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

const ENTER_KEY_CODE = 13;

export const TodoItem: React.FC<Props> = ({ todo, onEdit, onDelete }) => {
  const { isCompleted, title } = todo;
  const [taskValue, setTaskValue] = React.useState<string>(title);

  const handleCheckboxChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onEdit({ ...todo, isCompleted: e.target.checked });
    },
    [onEdit, todo]
  );

  const handleTaskChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskValue(e.target.value);
    },
    []
  );

  const saveTaskTitle = React.useCallback(() => {
    onEdit({ ...todo, title: taskValue });
  }, [todo, onEdit, taskValue]);

  const handleEnterPress = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        saveTaskTitle();
      }
    },
    [saveTaskTitle]
  );

  const handleRemoveButtonPress = React.useCallback(() => {
    onDelete(todo);
  }, [onDelete, todo]);

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
      <Checkbox checked={isCompleted} onChange={handleCheckboxChange} />
      <button onClick={handleRemoveButtonPress} type="button">
        <FontAwesomeIcon icon={faTrash} size="xs" />
      </button>
    </Container>
  );
};
