import './App.css'
import Pomodoro from './components/Pomodoro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CourseDetails from './components/CourseDetails'
import Schedule from './components/Schedule'
import styled from 'styled-components'

// För att rendera din komponent, lägg till en länk i Dashboard.js
// och lägg till en route likt nedan.

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(#d7c0d0 50%, white 50%);
  overflow: scroll;
`

const App = () => {
  return (
    <Background>
      <Router>
        <Routes>
          <Route path='/pomodoro/' element={<Pomodoro />} />

          <Route path='/schedule/:id' element={<Schedule />} />

          <Route path='/' element={<Dashboard />} />

          <Route path='/merit/' element={<Dashboard />} />

          <Route path='/merit/:courseCode' element={<CourseDetails />} />
        </Routes>
      </Router>
    </Background>
  )
}

export default App
