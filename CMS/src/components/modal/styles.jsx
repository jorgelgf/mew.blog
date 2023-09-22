import { styled } from 'styled-components'

export const Container = styled.div`
background-color: white;
position: absolute;
z-index:3;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding:3rem;
flex-direction: column;
h1{
  color:orangered
}
span{
  display: flex;
  width: 20rem;
}

  
`
export const Opacity = styled.div`
position: absolute;
z-index:2;
min-height: 100vh;
width: 100%;
top:0;
left:0;
background-color: #00000060;
  

`