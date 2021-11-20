// import { render } from "@testing-library/react";
import React from 'react'

class App extends React.Component {
  render () {
    const date = new Date()
    const hour = date.getHours()
    return (
      <div>
        <h1>Test website</h1>
        {hour >= 12 ? hour >= 18 ? <h2>God kväll</h2> : <h2>God Eftermiddag</h2> : <h2>God Morgon</h2>}
      </div>
    )
  }
}
export default App

// Denna funkar
