import React from 'react'
import mt2b from 'C:/Users/olive/Documents/GitHub/merit/src/data/mt2b.json'
import { useParams } from 'react-router'
import styled from 'styled-components'

const LectureBlock = styled.div`
  background-color: white;
  box-shadow: 0px 0px 15px rgb(33 33 33 / 20%);
  font-family: 'Barlow', sans-serif;
  margin: 5px;
  border-radius: 10px;
`

const Schedule = () => {
  const { prop } = useParams()
  const match = []
  for (let i = 0; i < mt2b.length(); i++) {
    if (mt2b[i].Startdatum === prop) {
      match.push(mt2b[i])
    }
  }
  console.log(mt2b[0])

  return (
    <div>
      {match.map((item) => (
        <LectureBlock key={item.Startdatum}>
          {item.Kurs} <br />
          {item.Starttid} {' - '}
          {item.Sluttid} <br />
          {item.Lokal} <br />
          <br></br>
        </LectureBlock>
      ))}
    </div>
  )
}

export default Schedule
