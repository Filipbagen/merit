import React from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'

const Back = styled.a`
    position: absolute;
    top: 20px;
    left: 20px;
    color: black;
    margin: 0;
`

const BackBtn = () => {
  return (
    <Back href='/'>
      <BiChevronLeft size={50} />
    </Back>
  )
}

export default BackBtn
