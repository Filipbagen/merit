import React from 'react'
import Message from './Message'
import Quotes from './Quotes'
import Progressbar from './Progressbar'
import styled from 'styled-components'
import Calendar from './Calendar'
import CourseMap from './CourseMap'
import Exmap from './Exmap'
// import Background from './Background'

const Content = styled.div`
{
  top: 15px;
  position: relative;
  background-color: white;
  border-radius: 44px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}
&:after {
  content: "";
  position: absolute;
  top: -100px;
  right: 0;
  height: 100px;
  width: 100px;
  border-bottom-right-radius: 50%;
  box-shadow: 0 50px 0 0 #fff;
}
`

const Timer = styled.a`
  border-radius: 10px;
  height: 84px;
  background-color: #12293b;
  width: 300px;
  color: white;
  font-size: 26px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  text-decoration: none;
  margin: 20px;
`

const Container = styled.div`
  min-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #d7c0d0;
`

const Courses = styled.div`
  padding-left: 10px;
  width: 100vw;
  overflow: auto;
  display: flex;
`
const Exstyle = styled.div`
padding: 15px; 
margin-bottom: 80px; 
margin-left: 10px;
height: 45px;
`
const Text = styled.div`
font-size: 23px; 
text-align: left; 
padding-top: 30px;
padding-bottom: 10px;
padding-left: 20px;
text-decoration: underline;
font-family: Barlow;
align-self: flex-start;
`

const Dashboard = () => {
  return (
    <Container>

      <Message />
      <Calendar />

      <Content>
        <Text>Nuvarande kurser</Text>
        <Courses>
          <CourseMap />
        </Courses>

        <Exstyle>
          <Exmap />
        </Exstyle>

        <Timer href='pomodoro'>
          <h2>TIMER</h2>
        </Timer>

        <Progressbar />

        <Quotes />

      </Content>
    </Container>
  )
}

export default Dashboard
