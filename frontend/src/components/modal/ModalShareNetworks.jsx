import React from "react";
import * as S from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ModalShareNetworks = () => {
  return (
    <S.DivNetworks>
      <h3>Compartilhar Post</h3>
      <div>
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaLinkedin />
        </span>
      </div>
    </S.DivNetworks>
  );
};

export default ModalShareNetworks;
