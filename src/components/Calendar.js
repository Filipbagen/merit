import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const Circle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  font-family: 'Barlow', sans-serif;
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
  let today = new Date()
  const { id } = useParams()
  const selectedDay = Number(id ? id.split('-')[2] : today.getDate())
  console.log(selectedDay)
  // const [selectedDay, setSelectedDay] = useState(id ? id.split('-')[2] : today.getDate())
  // console.log(today.getDate())

  const data = []

  for (let i = 0; i < 5; i++) {
    data.push({
      title: weekdays[today.getDay()],
      date: ('0' + today.getDate()).slice(-2),
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      trueDate: today.getDate()
    })
    today = new Date(today.getTime() + 24 * 60 * 60 * 1000)
  }

  return (
    <Week>
      {data.map((item, i) => (
        <Circle color={selectedDay === item.trueDate ? '#ED6519' : 'white'} key={item.date}>
          <Link
            // onClick={() => setSelectedDay(i)}
            to={'/merit/schedule/' + item.year + '-' + item.month + '-' + item.date}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {' '}
            {item.title} <br />
            {item.trueDate}
          </Link>
        </Circle>
      ))}
    </Week>
  )
}

export default Calendar

// get current date
