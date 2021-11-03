import './App.css'
import Schedule from './components/Schedule'
import CSVReader from 'react-csv-reader'
import Pomodoro from './components/Pomodoro'

const App = () => {
  return (
    <div>
      <CSVReader onFileLoaded={(data, fileInfo, originalFile) => console.dir(data, fileInfo, originalFile)} />
      <Pomodoro/>
    </div>
  )
}

export default App
