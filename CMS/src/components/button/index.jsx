import React from 'react'
import * as S from './styles'; const Button = ({ text, style, onClick }) => {
  return (
    <S.But onClick={onClick} style={style}>{text}</S.But>
  )
}

export default Button