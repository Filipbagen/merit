import React from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Back = styled.a`
    position: absolute;
    top: 20px;
    left: 20px;
    color: black;
    margin: 0;
`

const BackBtn = () => {
  return (
    <Back>
      <Link to='/merit/' style={{ color: 'black' }}>
        <BiChevronLeft size={50} />
      </Link>
    </Back>
  )
}

export default BackBtn
