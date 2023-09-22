import React, { useState } from "react";
import * as S from "./styles";
import CatsPaw from "../../components/_img/CatsPaw.png";
import { useNavigate } from "react-router";
const Loading = () => {
  document.title = 'Mew.Blog';

  const navigate = useNavigate();

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  setTimeout(() => {
    setState1(true);
  }, 300);
  setTimeout(() => {
    setState2(true);
  }, 600);
  setTimeout(() => {
    setState3(true);
  }, 900);
  setTimeout(() => {
    setState4(true);
  }, 1200);
  setTimeout(() => {
    setState5(true);
    navigate("/home");
  }, 1500);
  return (
    <S.Container>
      {state1 && (
        <img src={CatsPaw} alt="CatsPaw" style={{ marginRight: "15%" }} />
      )}
      {state2 && <img src={CatsPaw} alt="CatsPaw" />}
      {state3 && (
        <img src={CatsPaw} alt="CatsPaw" style={{ marginRight: "15%" }} />
      )}
      {state4 && <img src={CatsPaw} alt="CatsPaw" />}
      {state5 && (
        <img src={CatsPaw} alt="CatsPaw" style={{ marginRight: "15%" }} />
      )}
    </S.Container>
  );
};

export default Loading;
