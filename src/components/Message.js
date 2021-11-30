// import { render } from "@testing-library/react";
import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: 'Barlow', sans-serif;
  position: absolute;
  margin: 30px 30px;
`

class App extends React.Component {
  render () {
    const date = new Date()
    const hour = date.getHours()
    return (
      <div>
        {hour >= 10 ? hour >= 12 ? hour >= 18 ? <Heading>God kväll</Heading> : <Heading>God eftermiddag</Heading> : <Heading>God förmiddag</Heading> : <Heading>Godmorgon</Heading>}
      </div>
    )
  }
}
export default App

// Denna funkar
