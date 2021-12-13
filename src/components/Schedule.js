import React from 'react'
import mt2b from '../data/mt2b.json'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Calendar from './Calendar'
import BackBtn from './BackBtn'

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #d7c0d0;
`

const Content = styled.div`
   {
    top: 5px;
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

const Asset = styled.h3`
  margin: 0;
  padding: 10px;
`

const StartTime = styled.p`
  margin: 0;
  padding: 34px 20px 0 0px;
`

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &:after {
    content: '';
    position: absolute;
    height: 28px;
    width: 3px;
    border-radius: 50px;
    background: #ed6519;
    transform: translate(-50%, 55%);
    margin-left: 20px;
  }
`

const TimeTable = styled.div`
  display: flex;
  flex-direction: row;
`

const Teacher = styled.p`
  margin: 0;
  padding: 0 0 10px 10px;
  font-style: italic;
`

const Headline = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 22px;
  text-align: center;
  margin: 0;
  padding: 32px 0 20px;
`

const TopRow = styled.a`
  display: flex;
  justify-content: space-between;
`

const Free = styled.h1`
  padding-top: 24px;
  font-family: Barlow;
`

const months = [
  'Januari',
  'Februari',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
  'December'
]

const LectureBlock = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 15px rgb(33 33 33 / 20%);
  font-family: 'Barlow', sans-serif;
  border-radius: 10px;
  width: 70vw;
  max-width: 400px;
  margin-top: 35px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Schedule = () => {
  const { id } = useParams()
  const match = []
  for (let i = 0; i < mt2b.length; i++) {
    if (id === mt2b[i].Startdatum) {
      match.push(mt2b[i])
    }
  }

  const removeZero = (number) => {
    if (number.split()[0] === 0) {
      return number.split()[1]
    }
    return number
  }

  const calculateHours = (block) => {
    const startHour = removeZero(block.Starttid.slice(0, 2))
    const endHour = removeZero(block.Sluttid.slice(0, 2))

    return endHour - startHour
  }

  return (
    <Container>
      <BackBtn />
      <Headline>
        Schema för {id.split('-')[2] < 10 ? id.split('-')[2].substring(1) : id.split('-')[2]}{' '}
        {months[id.split('-')[1] - 1]}
      </Headline>
      <Calendar />

      <Content>
        {match.length === 0
          ? (
            <Free>Du är schemafri 🎉</Free>
            )
          : (
              match.map((item) => (
                <TimeTable key={item.Starttid}>
                  <Time>
                    {/* style={{ height: calculateHours(item) >= 4 && '40px' }} */}
                    <StartTime>{item.Starttid}</StartTime>

                    <StartTime>{item.Sluttid}</StartTime>
                  </Time>

                  <LectureBlock style={{ height: calculateHours(item) >= 4 && '140px' }}>

                    <TopRow>
                      <Asset>{item.Kurs}</Asset>
                      <Asset>{item.Lokal ? item.Lokal : 'Distans'}</Asset>
                    </TopRow>

                    <Teacher>
                      {item.Undervisningstyp} <br /> {item.Lärare}
                    </Teacher>

                  </LectureBlock>
                </TimeTable>
              ))
            )}
      </Content>
    </Container>
  )
}

export default Schedule
