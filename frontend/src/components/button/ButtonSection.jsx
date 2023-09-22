import React from "react";
import { styled } from "styled-components";
const ButtonSection = ({ onClick, text, style }) => {
  return (
    <Container>
      <Button style={style} onClick={onClick}>
        {text}
      </Button>
    </Container>
  );
};

export default ButtonSection;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  letter-spacing: 2px;
`;
const Button = styled.button`
  color: white;
  background-color: orangered;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  &:hover {
    background-color: #ff5e23;
  }
`;
