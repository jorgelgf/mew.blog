import React from 'react';
import * as S from './styles';

const Modal = ({ children }) => {
  return (
    <>
      <S.Opacity />
      <S.Container><h1>Ok?</h1>
        <span>
          {children}
        </span>
      </S.Container>
    </>
  )
}

export default Modal

