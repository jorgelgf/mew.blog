import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router";
import { Footer } from '../../components';
import jorge from './img/jorge.jpg'
const About = () => {
  const navigate = useNavigate();
  document.title = 'Sobre Min';
  return (
    <>
      <S.Container onClick={() => navigate("/")}>
        <S.Item>
          <h1>Um pouco sobre mim...</h1>
          <img className='img'
            src={jorge}
            alt="minha-foto"
          />
          <h3>Olá! Me chamo Jorge Gurgel</h3>
          <p>Nascido em Janduís, Rio Grande do Norte.</p>
          <p>Minha trajetória é marcada por uma formação em redes de computadores e um curso técnico em eletrônica, mas é como desenvolvedor web que encontrei minha verdadeira paixão.

            Atualmente, estou cursando uma pós em engenharia de software, aprofundando meus conhecimentos e habilidades para criar experiências incríveis na web.

            <p>Além do mundo da tecnologia, sou um amante de felinos, compartilho minha vida com dois gatos adoráveis e minha esposa que é o meu pilar de apoio nessa jornada de crescimento.</p>

            Meu coração e minha mente estão sempre focados em inovar e aprimorar minhas habilidades, buscando sempre unir pessoas e negócios através das tecnologias.

            Estou animado para explorar novos desafios e oportunidades no mundo da tecnologia como desenvolvedor web!
          </p>


          <p style={{ marginTop: '5rem', color: '#a39c9c', cursor: 'pointer' }}>Clique em qualquer região para sair</p>
        </S.Item>
      </S.Container>
      <Footer />
    </>

  );
};

export default About;
