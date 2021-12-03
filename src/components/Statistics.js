import { useEffect, useState } from 'react'
import Chart from './Chart'
import { PropagateLoader } from 'react-spinners'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

// array med alla modules
const moduleTypes = ['TEN1', 'DAT1', 'KTR1', 'KTR2', 'KTR3', 'PRA1']

const Loader = styled.div`
  width: 100vw;
  overflow: auto;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Text = styled.p`
  font-size: 23px;
  padding: 0 0 0 20px;
  font-family: Barlow;
  align-self: flex-start;
  color: rgb(60, 60, 60);
  margin: 35px 0px 0px;
`

const Statistics = ({ courseCode }) => {
  const [data, setData] = useState([])

  const fetchStatics = async () => {
    let resData = []
    let index = 0

    do {
      const url = new URL('https://liu-server.herokuapp.com/statistics')
      const params = { course: courseCode, module: moduleTypes[index] }
      url.search = new URLSearchParams(params).toString()
      const res = await window.fetch(url)
      resData = await res.json()
      index++
      console.log(data)
      if (index > moduleTypes.length) {
        window.alert('Ingen statistik hittades')
        break
      }
      console.log(resData)
    } while (resData.length === 0)

    setData(resData.map(item => {
      return { ...item, id: uuidv4() }
    })
    )
  }

  useEffect(() => {
    fetchStatics()
  })

  return (
    <div>
      <Text>Tentastatistik</Text>
      <Loader>
        {data.length === 0 && <PropagateLoader color='#ED6519' loading size={20} />}
        {data.slice(0, 2).map(item => <Chart data={item} key={item.id} />)}
      </Loader>
    </div>
  )
}

export default Statistics
