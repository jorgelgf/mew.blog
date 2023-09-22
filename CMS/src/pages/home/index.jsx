import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Button, Input } from '../../components'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Home = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(null);
  const [validation, setValidation] = useState(false)
  const nav = useNavigate();
  useEffect(() => {
    localStorage.setItem('login', false);
    const api = async () => {
      try {
        const data = await fetch("http://localhost:3001/login")
        const response = await data.json()
        setLogin(response);

      } catch (error) {
        console.log("meu erro ", error)
      } finally {
        setValidation(false)
      }
    }

    api();
    /* eslint-disable */
  }, [validation])

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidation(true);

    if (login && login[0].name === name && login[0].password === password) {
      localStorage.setItem('login', true);
      nav('/actions')
    } else {
      toast.error("Something is wrong!")
      localStorage.setItem('login', false);

    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <header>HELLO</header>
        <span>Name: <Input value={name} onChange={(e) => setName(e.target.value)} /></span>
        <span>Password: <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} /></span>
        <div><Button text='SIGN IN' /></div>
      </form>
    </Container>
  )
}

export default Home;

const Container = styled.div`

height: 560px;
max-width: 80%;
display:flex;
flex-direction:column;
color: white;
background-color: #161515e1;
padding:  1rem 2rem ;
letter-spacing: 2px;
border-radius: 5px;

div{
    width: 100%;
    display: flex;
    
  }
header{
  
  padding-top:2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 300;
  color: #ededf1;
  text-shadow: 4px 3px 12px orangered;

}

span{
text-shadow: 4px 3px 12px orangered;
display: flex;
justify-content:flex-start;
align-items: flex-start;
flex-direction: column;
margin-top: 3rem;
font-size: 1.5rem;

}

`