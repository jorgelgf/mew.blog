import React from "react";
import * as S from "./styles";
const ImagemTop = () => {
  const img =
    "https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80";
  return (
    <S.Container>
      <S.Imagem
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          width: "100%",
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundRize: "cover",
        }}
      />
      <div>Aqui é só blz</div>
    </S.Container>
  );
};

export default ImagemTop;
