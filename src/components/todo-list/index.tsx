import React from 'react';
import styled from 'styled-components';

type Props = {};

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
  border-bottom: 1px solid rgba(128,128,128,0.1);
  height: 8vh;
`;

const HeaderDate = styled.span`
  color: #a434ff;
`;

export const TodoList: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <HeaderDate>{new Date().toDateString()}</HeaderDate>
      </Header>
    </Container>
  );
};
