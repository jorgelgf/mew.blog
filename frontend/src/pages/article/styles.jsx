import { styled } from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 3px;

  width: 100%;
  align-items: center;

  span {
    font-size: 1rem;
  }
  p {
    font-size: 1.5rem;
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
  width: 90%;
  img {
    width: 100%;
  }
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

export const Emphasis = styled.div`
  border-left: solid 4px orangered;
  padding: 1rem;
  font-size: 1.7rem;
  font-style: italic;
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
