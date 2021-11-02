import './App.css'
import Schedule from './components/Schedule'
import CSVReader from 'react-csv-reader'

const App = () => {
  return (
    <div>
      <CSVReader onFileLoaded={(data, fileInfo, originalFile) => console.dir(data, fileInfo, originalFile)} />

    </div>
  )
}

export default App
