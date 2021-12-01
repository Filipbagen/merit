import React from 'react'
import Message from './Message'
import Quotes from './Quotes'
import Progressbar from './Progressbar'
import styled from 'styled-components'
import Calendar from './Calendar'
import CourseMap from './CourseMap'
import Exmap from './Exmap'

const Content = styled.div`
  min-height: 80vh;
  background-color: white;
  border-radius: 44px 44px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
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
const Head = styled.div`
  height: 20vh;
  width; 100vw;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d7c0d0;
  justify-content: space-evenly;
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
const Quote = styled.div`

`

const Dashboard = () => {
  return (
    <Container>
      <Head>
        <Message />
        <Calendar />
      </Head>

      <Content>
        <Text> Nuvarande kurser</Text>
        <Courses>
          <CourseMap />
        </Courses>

        <Text> Nästa examination</Text>
        <Exstyle>
          <Exmap />
        </Exstyle>

        <Timer href='pomodoro'>
          <h2>TIMER</h2>
        </Timer>

        <Progressbar />

        <Quote>
          <Quotes />
        </Quote>

      </Content>
    </Container>
  )
}

export default Dashboard
