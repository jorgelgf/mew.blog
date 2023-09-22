import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

const ModalHeader = ({ opt, onClick }) => {
  const navigate = useNavigate();

  const handleClickContact = () => {
    navigate("/");
  };
  return (
    <>
      <S.DivBackground onClick={onClick} />
      <S.Container>
        <section onClick={onClick}>
          {opt.map((item, key) => {
            return (
              <div
                key={key}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  item === "Contato"
                    ? handleClickContact()
                    : navigate(
                      (item === "Início" && "/") ||
                      (item === "Contos" && "/feeds") ||
                      (item === "Sobre" && "/About")
                    );
                }}
              >
                {" "}
                {item}
              </div>
            );
          })}
        </section>
        <S.DivIcons>
          <a href="https://www.facebook.com/jorgeluisgf" target='_blank' rel="noreferrer">
            <AiOutlineFacebook cursor={"pointer"} />
          </a>
          <AiOutlineInstagram cursor={"pointer"} />
          <BiLogoTiktok cursor={"pointer"} />
        </S.DivIcons>
      </S.Container>
    </>
  );
};

export default ModalHeader;
