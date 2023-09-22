import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { IoMdShareAlt } from "react-icons/io";

const ModalShare = ({ ...props }) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    function scroll() {
      setState(window.pageYOffset + 500);
    }
    scroll();
  }, []);

  return (
    <>
      <S.DivModalShare {...props} style={{ top: state }}>
        <IoMdShareAlt style={{ marginRight: "1rem" }} />
        Compartilhar post
      </S.DivModalShare>
    </>
  );
};

export default ModalShare;
