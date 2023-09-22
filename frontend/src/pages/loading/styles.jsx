import { styled } from "styled-components";

export const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;

      @media(min-width:810px){
      margin-top:3rem;
      }

  img {
    opacity: 0;

    transition: opacity 1s ease-out;
    width: 7%;
    rotate: 20deg;
    margin-bottom: 5%;
    animation: animate 0.4s forwards;
    @keyframes animate {
      to {
        opacity: 1;
        transform: initial;
      }
    }
  }
`;
