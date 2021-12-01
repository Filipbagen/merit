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
  justify-constent: space-evenly;
  align-items: center;
`

const weekdays = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']

const Calendar = () => {
  let today = new Date()

  const data = []

  console.log(new Date(today.getTime() + 24 * 60 * 60 * 1000))

  for (let i = 0; i < 5; i++) {
    today = new Date(today.getTime() + (24 * 60 * 60 * 1000) * i)
    data.push({ title: weekdays[today.getDay()], date: today.getDate(), isToday: i === 0 })
    console.log(data[i])
  }

  return (
    <Week>
      {data.map((item, index) => <Circle color={data[index].isToday ? '#ED6519' : 'white'} key={data.date}> {item.title} <br />{item.date} </Circle>)}
    </Week>
  )
}

export default Calendar

// get current date
