import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { ModalShare, ModalShareNetworks } from "../../components";

const Article = () => {
  const [modalShared, setModalShared] = useState(false);
  const [netWorks, setNetWoks] = useState(false);

  document.title = 'Mew.Blog';


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const SX = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "30%",
    marginTop: "1rem",
  };

  console.log(typeof (localStorage.getItem('emphasisArticle')))

  return (
    <>
      {modalShared && (
        <>
          <S.DivModalOpacity onClick={() => setModalShared(false)} />
          <ModalShare
            onClick={() => {
              setNetWoks(true);
              setModalShared(false);
            }}
          />
        </>
      )}
      {netWorks && (
        <>
          <S.DivModalOpacity
            onClick={() => {
              setNetWoks(false);
              setModalShared(false);
            }}
          />
          <ModalShareNetworks />
        </>
      )}
      <S.Container>
        <S.Item>
          <span>{localStorage.getItem('dateArticle')}</span>
          <div style={{ display: "flex" }}>
            {" "}
            <h1 style={{ width: "100%" }}>{localStorage.getItem('titleArticle')}</h1>
            <div style={SX}>
              <S.ButtonDiv onClick={() => setModalShared(!modalShared)}>
                ...
              </S.ButtonDiv>
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: localStorage.getItem('firstParagraphArticle') }} />

          {<img src={localStorage.getItem('imageArticle')} alt="imagem" />}



          <S.Emphasis>

            {localStorage.getItem('emphasisArticle')}
          </S.Emphasis>
          <p dangerouslySetInnerHTML={{ __html: localStorage.getItem('descriptionArticle') }} />
        </S.Item>
      </S.Container >
      ;
    </>
  );
};

export default Article;
