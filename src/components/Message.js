// import { render } from "@testing-library/react";
import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: 'Barlow', sans-serif;
  margin: 35px 10px;
  font-size: 43px;
`

class App extends React.Component {
  render () {
    const date = new Date()
    const hour = date.getHours()
    return (
      <>
        {hour >= 10 ? hour >= 12 ? hour >= 18 ? <Heading>God kväll</Heading> : <Heading>God eftermiddag</Heading> : <Heading>God förmiddag</Heading> : <Heading>Godmorgon</Heading>}
      </>
    )
  }
}
export default App

// Denna funkar
