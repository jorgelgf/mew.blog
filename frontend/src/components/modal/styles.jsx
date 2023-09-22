import { styled } from "styled-components";

//--------------
//Modal Header
export const DivBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #141414;
  width: 100%;
  height: 100vh;
  z-index: 2;
  animation: anime 0.5s forwards;
  opacity: 0;

  @keyframes anime {
    to {
      transition: opacity 0.2s ease-out;

      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  letter-spacing: 2px;
  overflow-x: hidden;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  color: #2c2a2a;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 2rem;
  section {
    margin-top: 3rem;
    margin-bottom: 2rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      &:hover{
        color:orangered;
      }
    }
  }

  transform: translateX(220px);
  animation: animeLeft 1s forwards;

  @keyframes animeLeft {
    to {
      transition: ease-out 0.2s;
      opacity: 1;
      transform: initial;
    }
  }

  @media (min-width: 720px) {
    font-size: 3rem;
    justify-content: space-around;
  }
`;

export const DivIcons = styled.div`
  letter-spacing: 2px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a{
    
    display: flex;
  }
`;

export const Icons = styled.div`
  width: 1rem;
  height: 2rem;
  border: solid;
`;
//Modal Header
//--------------

//--------------
//Modal Share (compartilhar post)

export const DivModalShare = styled.div`
  letter-spacing: 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem 0rem;
  border-radius: 3px;
  cursor: pointer;

  @media (max-height: 700px) {
    top: 70vh;
    right: 9vw;
  }

  @media (min-height: 999px) {
    top: 49vh;
    right: 9vw;
  }
  @media (min-height: 1010px) {
    top: 45vh;
    right: 9vw;
  }

  @media (min-height: 1290px) {
    top: 40vh;
    right: 7vw;
  }

  @media (min-height: 1100px) {
    top: 43vh;
    right: 7vw;
  }

  @media (min-height: 1140px) {
    top: 40vh;
    right: 7vw;
  }
  @media (min-height: 1300px) {
    top: 30vh;
    right: 7vw;
  }

  transform: translateY(-10px);
  animation: animeTop 0.3s forwards;

  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

//Modal Share
//--------------

//modalShareNetworks
//-------------

export const DivNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  z-index: 2;
  position: fixed;
  top: 50vh;
  width: 100%;
  height: 15%;
  font-size: 1.3rem;
  padding-bottom: 1.5rem;

  div {
    display: flex;
    width: 80%;
    padding: 0.5rem;
    justify-content: space-evenly;
    span {
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
//modalShareNetworks
//-------------
