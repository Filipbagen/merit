import React from 'react'
import mt2b from 'C:/Users/olive/Documents/GitHub/merit/src/data/mt2b.json'
import { useParams } from 'react-router'
import styled from 'styled-components'
import img from '../svg/blobs.svg'

const Wrapper = styled.div`
  background-image: url(${img});
  width: 100vw;
  margin: 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`

const LectureBlock = styled.div`
  background-color: white;
  box-shadow: 0px 0px 15px rgb(33 33 33 / 20%);
  font-family: 'Barlow', sans-serif;
  margin: 5px;
  border-radius: 10px;
  margin-bottom: 25px;
`
const Kurs = styled.h2`
  margin: 0;
  margin-left: 10px;
  font-size: 35px;
`
const Tid = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 27px;
`
const Lokal = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 25px;
`
const Headline = styled.h1`
  font-family: 'Barlow', sans-serif;
  margin: 5px;
  font-size: 25px;
  margin-bottom: 100px;
  margin-top: 0px;
`

const Schedule = () => {
  let { id } = useParams()
  const match = []
  for (let i = 0; i < mt2b.length; i++) {
    if (id === mt2b[i].Startdatum) {
      match.push(mt2b[i])
    }
  }
  console.log(mt2b[0])

  return (
    <Wrapper>
      <Headline>Schema för: {id}</Headline>
      {match.map((item) => (
        <LectureBlock key={item.Startdatum}>
          <Kurs>{item.Kurs} </Kurs>
          <br />
          <Tid>
            {item.Starttid} {' - '}
            {item.Sluttid} <br />
          </Tid>
          <br></br>
          <Lokal>
            {item.Lokal} <br />
          </Lokal>
          <br></br>
        </LectureBlock>
      ))}
    </Wrapper>
  )
}

export default Schedule
