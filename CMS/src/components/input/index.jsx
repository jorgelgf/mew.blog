import React from 'react'
import { styled } from 'styled-components'

const Input = ({ ...props }) => {
  return (<>

    <InputValue {...props} />
  </>
  )
}

export default Input

const InputValue = styled.input`
  letter-spacing:3px;
  margin-top: .5rem;
  padding: 1rem;
  width:92% ;
  border-radius: 2px;
  outline: none;
  border: none;
  color: #4b2c09;
`