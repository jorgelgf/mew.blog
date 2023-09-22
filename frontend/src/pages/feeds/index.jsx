import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { ModalShare, ModalShareNetworks } from "../../components";

import { useNavigate } from "react-router";
const Feeds = () => {
  const [modalShared, setModalShared] = useState(false);
  const [netWorks, setNetWoks] = useState(false);
  const [itens, setItens] = useState(null)

  const navigate = useNavigate();
  document.title = 'Contos';


  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("http://localhost:3001/posts/")
        const response: object = await res.json();
        setItens(response);
      } catch (err) {
        console.log(err);
      }
    }
    data();
  }, []);
  const SX = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: "1rem",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
        <header>
          Contos
        </header>
        {itens &&
          itens.map((i, index) => {
            return <S.Item key={index}>
              <S.ImageFeed
                style={{
                  backgroundImage: `url(${i.image})`,
                }}
              />
              <div style={SX}>
                <S.ButtonDiv onClick={() => setModalShared(!modalShared)}>
                  ...
                </S.ButtonDiv>
              </div>

              <S.Tittle onClick={() => {
                localStorage.setItem('titleArticle', i.title)
                localStorage.setItem('descriptionArticle', i.description)
                localStorage.setItem('emphasisArticle', i.emphasis)
                localStorage.setItem('dateArticle', i.date)
                localStorage.setItem('imageArticle', i.image)
                localStorage.setItem('firstParagraphArticle', i.firstParagraph)
                navigate("/article")
              }}>{i.title}</S.Tittle>
              <S.Details onClick={() => {
                localStorage.setItem('titleArticle', i.title)
                localStorage.setItem('descriptionArticle', i.description)
                localStorage.setItem('emphasisArticle', i.emphasis)
                localStorage.setItem('dateArticle', i.date)
                localStorage.setItem('imageArticle', i.image)
                localStorage.setItem('firstParagraphArticle', i.firstParagraph)
                navigate("/article")
              }}>
                {i.description.substring(0, 130)} [...]
                <div
                  style={{
                    borderBottom: " 0.5px #aaa6a6 solid",
                    marginTop: "3rem",
                  }}
                ></div>
              </S.Details>
            </S.Item>

          })

        }
      </S.Container>
    </>
  );
};

export default Feeds;
