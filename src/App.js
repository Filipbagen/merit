import './App.css'
import Schedule from './components/Schedule'
import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Dashboard from './components/Dashboard'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

//För att rendera din komponent, lägg till en länk i Dashboard.js
// och lägg till en route likt nedan.


const App = () => {
  return (
    <Router>
      <Container>
        <Routes>

          <Route path='/pomodoro' element={<Pomodoro/>}>
            
          </Route>

          <Route path='/' element={<Dashboard/>}>
            
          </Route>

        </Routes>
      </Container>
    </Router>
  )

}

export default App
