import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;
  letter-spacing: 2px;
  margin-bottom: 3rem;

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
  border: 0.5px #aaa6a6 solid;
  width: 90%;
  align-items: center;
  span {
    input:hover {
      border-bottom: 1px orangered solid;
    }
  }
`;
export const Details = styled.div`
  width: 90%;
  padding-bottom: 1rem;
`;

export const Date = styled.div`
  margin-top: 2rem;

  width: 150px;
  font-size: 0.8rem;
`;
export const Tittle = styled.div`
  padding: 1rem 0 1rem 0;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 600;
  width: auto;
  cursor: pointer;

  &:hover {
    color: orangered;
  }
`;

export const SubTittle = styled.div`
  width: auto;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    color: orangered;
  }
`;
