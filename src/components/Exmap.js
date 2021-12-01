import React from 'react'
import Ex from './Ex'
import styled from 'styled-components'

const CourseMap = () => {
    const examData = [{ examCourse: 'Vektoranalys', type: 'KTR3', date: '2021-12-15', time: '8:00-10:00' },
      { examCourse: 'Analys |||', type: 'TEN1', date: '2022-01-08', time: '8:00-13:00' },
      { examCourse: 'Vektoranalys', type: 'TEN1', date: '2022-01-10', time: '8:00-13:00' },
      { examCourse: 'Programmering i C++', type: 'DAT1', date: '2022-01-12', time: '8:00-13:00' }]
  
  const Total = styled.div`
  padding-left: 10px;
  width: 100vw;
  overflow: auto;
  display: flex;
`


  return (
    <Total>
      {examData.map(course => <Ex courseCode={course.examCourse} courseName={course.name} courseType={course.type} courseDate={course.date} courseTime={course.time} key={course.examCourse} />)}
    </Total>
  )
  
}

export default CourseMap
