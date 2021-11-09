import './App.css'
import Schedule from './components/Schedule'
import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  bakground: blue;
`

const App = () => {
  return (
    <Container>
      
      <Pomodoro/>
    </Container>
  )
}

export default App
