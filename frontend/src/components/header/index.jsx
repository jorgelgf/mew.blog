import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router";
import ModalHeader from "../modal/ModalHeader";

const Header = () => {
  const [rotate, setRotate] = useState(false);
  const [itens, setItens] = useState(false);
  const [bool, setBol] = useState(false);
  const navigate = useNavigate();
  let h,
    colorClose,
    rot1,
    close = "",
    rot2 = "";

  if (rotate) {
    rot1 = "rotate(-45deg) translate(-8px, 8px) ";
    rot2 = "rotate(45deg) translate(-5px, -7px) ";
    h = "0";
    colorClose = "#f01a1a";
    close = "Fechar";
  }
  const handleClick = () => {
    setItens(!itens);
    setRotate(!rotate);
    setBol(!bool);
  };

  return (
    <>
      <S.Container>
        <nav>
          <span onClick={() => navigate("/")}>Meow.Blog </span>
          {bool && (
            <ModalHeader
              onClick={() => {
                setRotate(!rotate);
                setBol(!bool);
              }}
              opt={["Início", "Contos", "Sobre", "Contatos"]}
            />
          )}

          <S.MobileMenu onClick={handleClick}>
            <div
              title={close}
              style={{
                transform: rot1,
                transition: "all .2s",
                backgroundColor: colorClose,
              }}
            ></div>
            <div style={{ opacity: h }} className="line2"></div>

            <div
              style={{
                transform: rot2,
                transition: "all .2s",
                backgroundColor: colorClose,
              }}
              onClick={() => setRotate(!rotate)}
            ></div>
          </S.MobileMenu>
          <S.NavList>
            <li>
              <S.Alink
                onClick={() => {
                  navigate("/");
                }}
              >
                Início
              </S.Alink>
            </li>
            <li>
              <S.Alink
                onClick={() => {
                  navigate("/Feeds");
                }}
              >
                {" "}
                Contos
              </S.Alink>
            </li>

            <li>
              <S.Alink
                href="/"
                onClick={() => {
                  navigate("/about");
                }}
              >
                {" "}
                Sobre
              </S.Alink>
            </li>
            <li>
              <S.Alink href="/"> Contatos</S.Alink>
            </li>
          </S.NavList>
        </nav>
      </S.Container>
    </>
  );
};

export default Header;
