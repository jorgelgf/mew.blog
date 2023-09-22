import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SectionInsta = () => {
  const nav = useNavigate();
  return (
    <Container>
      <h1>Siga-me no Instagram</h1>
      <div>
        <img onClick={() => nav('/')} width='100%' src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="gato" />
      </div>
    </Container>)

}
export default SectionInsta;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;
  letter-spacing: 2px;
    div{
      margin:0;
      padding:0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin-bottom: 3rem;

      img{
        cursor: pointer;
      }

      a{
        margin:0;
        padding:0;
      }
    }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }


  }`

