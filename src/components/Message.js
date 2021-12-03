// import { render } from "@testing-library/react";
import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: 'Barlow', sans-serif;
  padding: 15px 30px 10px 30px;
  margin: 25px 20px;
  font-size: 36px;
  margin: 0;
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
