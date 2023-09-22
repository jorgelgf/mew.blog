import React from "react";
import * as S from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";
const Signature = () => {
  const [email, setEmail] = useState(null);
  const handleClick = (event) => {
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const validation = emailValidation.test(email);
    validation
      ? toast.success("Nos veremos em breve!")
      : toast.warn("Digite um e-mail válido");
  };

  return (
    <S.Container>
      <S.Form onSubmit={(event) => event.preventDefault()}>
        <h1>Fique por dentro de todos os Posts</h1>
        <input
          placeholder="E-mail*"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button onClick={handleClick}>Assine</button>
      </S.Form>
    </S.Container>
  );
};

export default Signature;
