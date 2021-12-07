import { useEffect, useState } from 'react'
import Chart from './Chart'
import { PropagateLoader } from 'react-spinners'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const ColorCode = styled.div`
  border-radius: 50px;
  width: 10px;
  height: 10px;
`
const ColorCont = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
`

const Charts = styled.div`
  width: 100vw;
  overflow: auto;
  overflow-y: hidden;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }

  div {
    flex-shrink: 0;
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

// array med alla modules
const moduleTypes = ['TEN1', 'DAT1', 'KTR1', 'KTR2', 'KTR3', 'PRA1']

const Statistics = ({ courseCode }) => {
  const [data, setData] = useState([])

  const fetchStatics = async () => {
    let statistics = []
    console.log('fetching')
    for (const module of moduleTypes) {
      // await window.alert(module)
      const url = new URL('https://liu-server.herokuapp.com/statistics')
      const params = { course: courseCode, module: module }
      url.search = new URLSearchParams(params).toString()
      const res = await window.fetch(url)
      const resData = await res.json()
      statistics = [...statistics, ...resData]
    }

    console.log(statistics)

    setData(
      statistics.map((item) => {
        return { ...item, id: uuidv4() }
      })
    )
  }

  useEffect(() => {
    fetchStatics()
  }, [])

  return (
    <div>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <Text>Tentastatistik</Text>

      <Charts>
        {data.slice(0, 60).map(item => (
          <Chart data={item} key={item.id} />
        ))}
      </Charts>

      <ColorCont>
        <ColorCode style={{ backgroundColor: '#ED6519' }}>
          <h3>U</h3>
        </ColorCode>
        <ColorCode style={{ backgroundColor: '#3B484F' }}>
          <h3>3</h3>
        </ColorCode>
        <ColorCode style={{ backgroundColor: '#C4C4C4' }}>
          <h3>4</h3>
        </ColorCode>
        <ColorCode style={{ backgroundColor: '#F5AD85' }}>
          <h3>5</h3>
        </ColorCode>
      </ColorCont>

      <Loader>
        {data.length === 0 && <PropagateLoader color='#ED6519' loading size={20} />}
        {/* {<PropagateLoader color='#ED6519' loading size={20} /> && } */}
      </Loader>

    </div>
  )
}

export default Statistics

// Quota exceeded
