import React from 'react'
import Message from './Message'
import Quotes from './Quotes'
import Progressbar from './Progressbar'
import styled from 'styled-components'
import Calendar from './Calendar'
import CourseMap from './CourseMap'
import Exmap from './Exmap'
import { Link } from 'react-router-dom'
// import Background from './Background'

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #d7c0d0;
  justify-content: space-evenly;
`

const Content = styled.div`  
  top: 15px;
  min-height: 80vh;
  position: relative;
  background-color: white;
  border-radius: 44px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    top: -100px;
    right: 0;
    height: 100px;
    width: 100px;
    border-bottom-right-radius: 50%;
    box-shadow: 0 50px 0 0 #fff;
    pointer-events: none;
  }
`

const Timer = styled.a`
  border-radius: 10px;
  height: 84px;
  background-color: #12293b;
  width: 300px;
  margin: 25px;
  text-align: center;
  vertical-align: middle;
`

const Overflow = styled.div`
  width: 100vw;
  overflow: auto;
  display: flex;
`

const Text = styled.h2`
  color: white;
  line-height: 24px;
  font-size: 36px;
`

const Dashboard = () => {
  return (
    <Container>
      <Message />
      <Calendar />

      <Content>
        <Overflow>
          <CourseMap />
        </Overflow>

        <Overflow>
          <Exmap courseCode='all' />
        </Overflow>

        <Timer>
          <Link to='/merit/pomodoro' style={{ textDecoration: 'none' }}>
            <Text>PLUGGTIMER</Text>
          </Link>
        </Timer>

        <Progressbar />

        <Quotes />
      </Content>
    </Container>
  )
}

export default Dashboard
