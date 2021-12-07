import React from 'react'
import mt2b from '../data/mt2b.json'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Calendar from './Calendar'
import { BiArrowBack } from 'react-icons/bi'

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #d7c0d0;
  justify-content: space-evenly;
`

const Content = styled.div`
{
  top: 15px;
  min-height: 80vh;
  position: relative;
  background-color: white;
  border-radius: 44px 0 0 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}
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

const LectureBlock = styled.div`
  background-color: white;
  box-shadow: 0px 0px 15px rgb(33 33 33 / 20%);
  font-family: 'Barlow', sans-serif;
  border-radius: 10px;
  width: 70vw;
  max-width: 400px;
  margin-top: 60px;
`
const Kurs = styled.h2`

`
const Time = styled.p`

`
const Lokal = styled.h2`

`
const Headline = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 25px;
  text-align: center;
  margin: 0;
  padding: 18px 0 20px;
`

const Back = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
`

const TopRow = styled.a`
  display: flex;
  justify-content: space-around;
`

const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']

const Schedule = () => {
  const { id } = useParams()
  const match = []
  for (let i = 0; i < mt2b.length; i++) {
    if (id === mt2b[i].Startdatum) {
      match.push(mt2b[i])
    }
  }

  return (
    <Container>
      <Back href='/'>
        <BiArrowBack size={50} />
      </Back>
      <Headline>Schema för {id.split('-')[2] < 10 ? id.split('-')[2].substring(1) : id.split('-')[2]} {months[id.split('-')[1] - 1]}</Headline>
      <Calendar />

      <Content>
        {match.length === 0
          ? <h1>Du är schemafri</h1>
          : match.map((item) => (
            <LectureBlock key={item.Starttid}>
              <TopRow>
                <Kurs>{item.Kurs}</Kurs>
                <Lokal>{item.Lokal ? item.Lokal : 'Distans'}</Lokal>
              </TopRow>
              <Time>{item.Starttid} - {item.Sluttid}</Time>
            </LectureBlock>
          ))}

      </Content>
    </Container>
  )
}

export default Schedule
