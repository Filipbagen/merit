import React from 'react'
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

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
  padding: 0 0 0 20px;
  font-family: Barlow;
  align-self: flex-start;
  color: rgb(60, 60, 60);
  margin: 35px 10px 0;
`

const CourseMap = () => {
  return (
    <div>
      <Text>Nuvarande kurser</Text>
      <Total>
        {courseData.map(course => <Course courseCode={course.coursecCode} courseName={course.name} key={course.coursecCode} />)}
      </Total>
    </div>
  )
}

export { courseData }
export default CourseMap
