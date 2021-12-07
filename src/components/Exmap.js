import React from 'react'
import Ex from './Ex'
import styled from 'styled-components'

const Total = styled.div`
  width: 100vw;
  overflow: auto;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Text = styled.p`
  font-size: 23px;
  font-family: Barlow;
  align-self: flex-start;
  color: rgb(60, 60, 60);
  padding-left: 30px;
  margin-top: 10px;
  margin-bottom: 0;
`

const examData = [{ courseCode: 'TNA007', courseName: 'Vektoranalys', type: 'KTR3', date: '15 December', time: '8:00-10:00', key: '1' },
  { courseCode: 'TNA006', courseName: 'Analys |||', type: 'TEN1', date: '8 Januari', time: '8:00-13:00', key: '2' },
  { courseCode: 'TNA007', courseName: 'Vektoranalys', type: 'TEN1', date: '10 Januari', time: '8:00-13:00', key: '3' },
  { courseCode: 'TNG033', courseName: 'Programmering i C++', type: 'DAT1', date: '12 Januari', time: '8:00-13:00', key: '4' }]

let sortedExams = []

const Exmap = ({ courseCode }) => {
  if (courseCode === 'all') {
    sortedExams = examData
  } else {
    sortedExams = examData.filter(exam => exam.courseCode === courseCode)
  }

  return (
    <div>
      <Text>Nästa examination</Text>
      <Total>
        {sortedExams.map(course => <Ex courseCode={course.courseCode} courseName={course.courseName} courseType={course.type} courseDate={course.date} courseTime={course.time} key={course.key} />)}
      </Total>
    </div>
  )
}

export default Exmap
