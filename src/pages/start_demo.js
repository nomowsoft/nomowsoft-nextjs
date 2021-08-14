import React from "react";
import { StartForm } from "sections";
import styled from "styled-components";

function StartDemo() {
  return (
    <Container>
      <StartForm />
    </Container>
  );
}

const Container = styled.div`
  background: ${({ theme }) => theme?.colors.bg};
  color: ${({ theme }) => theme?.colors.text};
  min-height: 100vh;
`;

export default StartDemo;
