import './App.css'
// import Schedule from "./components/Schedule";
// import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CourseDetails from './components/CourseDetails'
import Schedule from './components/Schedule'
import Calendar from './components/Calendar'

// För att rendera din komponent, lägg till en länk i Dashboard.js
// och lägg till en route likt nedan.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pomodoro/' element={<Pomodoro />} />

        <Route path='/schedule/:id' element={<Schedule />} />

        <Route path='/' element={<Dashboard />} />

        <Route path='/merit/' element={<Dashboard />} />

        <Route path='/merit/:courseCode' element={<CourseDetails />} />
      </Routes>
    </Router>
  )
}

export default App
