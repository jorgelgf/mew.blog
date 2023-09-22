import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router';

const Exit = () => {

  const nav = useNavigate();
  return (
    <ButtonExit onClick={() => {
      localStorage.clear();
      nav('/')
    }}>X</ButtonExit>
  )
}

export default Exit;

const ButtonExit = styled.button`
z-index: 5;
cursor: pointer;
position: absolute;
font-size: 3rem;
right: 10px;
top:0;
margin-top: 1rem;
border-radius:50%;
background-color: transparent;
border:none;
color: orangered;
font-weight: 500;
transition: 0.5s ease all;
&:hover{
  filter: brightness(1.5);

}

`