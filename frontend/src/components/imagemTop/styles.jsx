const { styled } = require("styled-components");

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .imagem {
  }
  div {
    display: flex;
    align-items: flex-start;

    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
