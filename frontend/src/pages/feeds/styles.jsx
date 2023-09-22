import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  letter-spacing: 3px;

  header {
  width: 90%;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 3rem;
  font-style: italic;
  color: black;

  
  }
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const Item = styled.div`
  margin-bottom: 1rem;
  display: flex;

  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-items: center;
`;
export const ButtonDiv = styled.div`
  font-size: 2rem;
  transform-origin: left bottom;
  writing-mode: vertical-rl;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #9c9999;
  }
`;

export const Details = styled.div`
  width: 90%;
  padding-bottom: 1rem;
`;

export const Tittle = styled.div`
  padding-bottom: 1rem;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: 500;
  width: 90%;
  cursor: pointer;
`;

export const DivModalOpacity = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #00000058;
  width: 100%;
  height: 100%;
`;

export const ImageFeed = styled.div`
  background-size: cover;
  width: 100%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-rize: cover;
`;
