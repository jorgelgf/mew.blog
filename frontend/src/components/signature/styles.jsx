import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  color: white;
 `;

export const Form = styled.form`
  background-color: orangered;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-items: center;
  h1 {
    padding: 1rem;
  }

  input {
    padding: 0.5rem 0.5rem;
    width: 70%;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px white solid;
    outline: none;
    font-size: 1.5rem;

    @media (max-width: 300px) {
      font-size: 1rem;
    }

    &::placeholder {
      color: #b4b4b4;
    }
  }
  input:hover {
    border-bottom: 1px black solid;
  }

  button {
    font-size: 1.5rem;
    color: orangered;
    padding: 0.5rem 3rem;
    border: none;
    margin: 1.5rem 0 3rem 0;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  }
`;
