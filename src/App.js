import './App.css'
import Schedule from './components/Schedule'
import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'
import styled from 'styled-components'
import { BrowserRouter, Router, Switch, Route, Link, Routes } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

const App = () => {
  return (

     
        <Container>
          
        <BrowserRouter>
            <Routes>
              
              <Route path="pomodoro" element={<Pomodoro />} />
              
              
            </Routes>
        </BrowserRouter>,

        </Container>)

}

export default App
