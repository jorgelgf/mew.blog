import React from "react";
import * as S from "./styles";

const Footer = ({ ...props }) => {
  return (
    <>
      <S.Container {...props}>© 2023 por Jorge Gurgel</S.Container>
    </>
  );
};

export default Footer;
