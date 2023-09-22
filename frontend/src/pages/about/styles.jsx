import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  letter-spacing: 2px;
  font-size: 1.5rem;
  .img {
    width: 15%;
    border-radius: 50%;
    box-shadow:     inset 0 0 1em gold,
  0 0 1em red;
  }
`;

export const Item = styled.div`
  width: 90%;

  h3{
    margin-top: 3rem ;
    margin-bottom: 2rem;
  }
`;
