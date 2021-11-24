import './App.css'
// import Schedule from "./components/Schedule";
// import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

// För att rendera din komponent, lägg till en länk i Dashboard.js
// och lägg till en route likt nedan.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pomodoro' element={<Pomodoro />} />

        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
