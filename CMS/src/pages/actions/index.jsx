import React, { useEffect } from 'react'
import * as S from './styles';
import { Button } from '../../components/';
import { useNavigate } from 'react-router';

const Actions = () => {
  const nav = useNavigate();
  useEffect(() => {
    const verify = () => {
      if (localStorage.getItem('login') === 'false') {
        nav('/')
      }
    }
    verify()
    /* eslint-disable */
  }, [localStorage.getItem('login')])


  return (
    <S.Container>
      <span> <Button onClick={() => nav('/register')} text='CRIAR' style={{ backgroundColor: 'green', margin: '0' }} /></span>
      <span><Button onClick={() => nav('/List')} text='LISTAR' style={{ backgroundColor: 'orangered', margin: '0' }} /></span>

    </S.Container>
  )
}

export default Actions