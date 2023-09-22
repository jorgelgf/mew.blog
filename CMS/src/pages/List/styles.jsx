import { styled } from 'styled-components';
export const Container = styled.div`

height: auto;
max-width:80%;
display:flex;
flex-direction:column;
color: white;
background-color: #161515e1;
padding:  1rem 2rem  3rem 2rem;
letter-spacing: 2px;
border-radius: 5px;
.light{
  &:hover{
  filter: brightness(1.5);

}
}
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media(max-width:600px){
  margin-top: 7rem;
}

span{
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  p{
    width: 100%;
  }
  div{
    padding: 0 1rem;
    color: red;
    cursor: pointer;
    
  }
  
}`

