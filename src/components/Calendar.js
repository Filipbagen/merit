import styled from 'styled-components'
import React from 'react'

const Circle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Week = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 430px;
  padding: 10px 0;
`

const weekdays = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']

const Calendar = () => {
  const day = (new Date()).getDay()
  let today = new Date()

  const data = []
  data.push({ title: weekdays[today.getDay()], date: today.getDate(), isToday: true })

  for (let i = 0; i < 4; i++) {
    today = new Date(today.getTime() + 24 * 60 * 60 * 1000)
    data.push({ title: weekdays[today.getDay()], date: today.getDate(), isToday: false })
  }

  console.log(day === 3 ? 'white' : 'red')
  return (
    <Week>
      {data.map((item) => (
        <Circle color={item.isToday ? '#ED6519' : 'white'} key={item.date}>
          {' '}
          {item.title} <br />
          {item.date}{' '}
        </Circle>
      ))}
    </Week>
  )
}

export default Calendar

// get current date
