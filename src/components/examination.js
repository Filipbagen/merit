import React from 'react'
import ExaminationMap from './ExaminationMap'

const App = () => {
  const examData = [{ examCourse: 'Vektoranalys', type: 'KTR3', date: '2021-12-15', time: '8:00-10:00' },
    { examCourse: 'Analys |||', type: 'TEN1', date: '2022-01-08', time: '8:00-13:00' },
    { examCourse: 'Vektoranalys', type: 'TEN1', date: '2022-01-10', time: '8:00-13:00' },
    { examCourse: 'Programmering i C++', type: 'DAT1', date: '2022-01-12', time: '8:00-13:00' }]

  const total = {
    paddingLeft: '10px',
    width: '100vh',
    overflow: 'auto',
    display: 'flex'
  }

  return (
    <div>
      <h1>Nästa examination</h1>
      <div style={total}>
        {examData.map(course => <ExaminationMap courseCode={course.examCourse} courseName={course.name} courseType={course.type} courseDate={course.date} courseTime={course.time} key={course.examCourse} />)}
      </div>
    </div>
  )
}

export default App
