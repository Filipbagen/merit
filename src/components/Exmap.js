import React from 'react'
import Ex from './Ex'
import styled from 'styled-components'

const Total = styled.div`
padding-left: 10px;
overflow: auto;
display: flex;
`

const Text = styled.div`
font-size: 23px; 
text-align: left; 
padding-bottom: 10px;
padding-left: 20px;
text-decoration: underline;
font-family: Barlow;
`

const examData = [{ courseCode: 'TNA007', courseName: 'Vektoranalys', type: 'KTR3', date: '2021-12-15', time: '8:00-10:00' },
  { courseCode: 'TNA006', courseName: 'Analys |||', type: 'TEN1', date: '2022-01-08', time: '8:00-13:00' },
  { courseCode: 'TNA007', courseName: 'Vektoranalys', type: 'TEN1', date: '2022-01-10', time: '8:00-13:00' },
  { courseCode: 'TNG033', courseName: 'Programmering i C++', type: 'DAT1', date: '2022-01-12', time: '8:00-13:00' }]

const Exmap = ({ courseCode }) => {
  const soredExams = examData.filter(exam => exam.courseCode === courseCode)

  return (
    <div>
      <Text> Nästa examination</Text>
      <Total>
        {soredExams.map(course => <Ex courseCode={course.courseCode} courseName={course.courseName} courseType={course.type} courseDate={course.date} courseTime={course.time} key={course.examCourse} />)}
      </Total>
    </div>
  )
}

export default Exmap
