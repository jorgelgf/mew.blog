import React from "react";
import { styled } from "styled-components";
import * as S from "./styles";
import ButtonActions from "../button/ButtonSection";
const SectionBottom = () => {
  return (
    <>
      <S.Container
        style={{ backgroundColor: "#f0eeee", paddingBottom: "3rem" }}
      >
        <h2>Compartilhe a sua opinião</h2>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <span>
            Nome
            <br />
            <Input type="text" />
          </span>
          <span>
            Sobrenome
            <br />
            <Input type="text" />
          </span>
          <span>
            E-mail*
            <br />
            <Input type="email" />
          </span>
          <span>
            Digite a sua mensagem:
            <br />
            <Input type="text" />
          </span>
          <ButtonActions
            style={{ padding: "1rem 5rem 1rem 5rem" }}
            text="Enviar"
          />
        </Form>
      </S.Container>
    </>
  );
};

export default SectionBottom;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;
  letter-spacing: 2px;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  span {
    width: 90%;
  }
`;
const Input = styled.input`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px #b4b4b4 solid;
  outline: none;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.5rem 0.5rem;

  width: 98%;

  &::placeholder {
    color: #b4b4b4;
  }
`;
