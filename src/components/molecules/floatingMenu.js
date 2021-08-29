import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { whatsapp } from "react-icons-kit/fa/whatsapp";

const FloatingMenu = ({ data }) => {
  return (
    <Container>
      <a href={data.whatsapp} target="_blank" rel="noreferrer">
        <Icon size={30} icon={whatsapp} />
      </a>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px;
`;

export default FloatingMenu;
