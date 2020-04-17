import React from 'react';
import styled from 'styled-components';

type Props = {};

const Container = styled.div`
  background-color: #fff;
  width: 1100px;
  height: 80%;
`;

export const TodoList: React.FC<Props> = () => {
  return <Container></Container>;
};
