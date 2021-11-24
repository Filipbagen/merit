import React from 'react'
import Message from './Message'
import Quotes from "./Quotes";
import Progressbar from "./Progressbar"
import styled from 'styled-components';

const Timer = styled.a`
  border-radius: 10px; 
  height: 84px;
  background-color: #12293B;
  width: 300px;
  color: white;
  font-size: 26px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  text-decoration: none;
`

const Content = styled.div`
  min-height: 80vh;
  background-color: white;
  border-radius: 44px 44px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  0px 0px 30px 8px rgba(0,0,0,0.2)
`

const Head = styled.div`
  height: 20vh;
  width; 100vw;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: #D7C0D0;
`

const Dashboard = () => {
  
  return (
      <Container>

        <Head>
            <Message />
        </Head>

        <Content>
            <Timer href="pomodoro">
                <h2>TIMER</h2>
            </Timer>

            <Progressbar />

            <Quotes />
        </Content>

    </Container>
  )
}

export default Dashboard
