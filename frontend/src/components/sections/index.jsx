import React from "react";
import * as S from "./styles";

const Section = ({ img, date, tittle, subtitle, onClick }) => {
  return (
    <S.Container>
      <S.Item>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            width: "100%",
            height: "300px",
            backgroundPosition: "center",
          }}
        />
        <S.Details>
          <S.Date>{date}</S.Date>
          <S.Tittle onClick={onClick}>{tittle}</S.Tittle>
          <S.SubTittle onClick={onClick}>{subtitle}</S.SubTittle>
        </S.Details>
      </S.Item>
    </S.Container>
  );
};

export default Section;
