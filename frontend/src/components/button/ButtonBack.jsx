import React from "react";
import { styled } from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const ButtonBack = ({ ...props }) => {
  return (
    <Button {...props}>
      <AiOutlineArrowUp />
    </Button>
  );
};

export default ButtonBack;

const Button = styled.button`
  letter-spacing: 2px;
  position: fixed;
  font-size: 3rem;
  font-weight: 500;
  right: 0;
  top: 59vh;
  z-index: 1;
  color: #e79805;
  background-color: transparent;
  border: 1px solid orange;
  cursor: pointer;

  :hover {
    color: #f1b33f;
  }

  animation: anime 2s forwards;
  opacity: 0;

  @keyframes anime {
    to {
      transition: opacity 1s ease-in-out;
      opacity: 0.7;
    }
  }
`;
