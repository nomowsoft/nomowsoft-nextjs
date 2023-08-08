import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { whatsapp } from "react-icons-kit/fa/whatsapp";

const FloatingMenu = ({ link_whatsapp }) => {
  return (
    <Container>
      <a href={link_whatsapp} target="_blank" rel="noreferrer">
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
  & a {
    color: #ffff;
    &:hover {
      color: #ddd;
    }
  }
`;

export default FloatingMenu;
