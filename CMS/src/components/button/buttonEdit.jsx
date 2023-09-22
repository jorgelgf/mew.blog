import React from 'react'
import * as S from './styles'
const ButtonEdit = ({ text, ...props }) => {
  return (
    <S.ButtonEditText {...props} children={text} />
  )
}

export default ButtonEdit