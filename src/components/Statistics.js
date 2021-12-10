import { useEffect, useState } from 'react'
import Chart, { grades } from './Chart'
import { SquareLoader } from 'react-spinners'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { css } from '@emotion/react'

const Dot = styled.div`
  border-radius: 50px;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
`

const ColorCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  width: 100vw;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
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
  padding: 0 0 0 30px;
  font-family: Barlow;
  align-self: flex-start;
  color: rgb(60, 60, 60);
  margin: 35px 0px 0px;
`

const override = css`
  margin: 5px;
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

    // console.log(statistics.sort((a, b) => (a.examina)))

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
        {data.slice(0, 20).map(item => (
          <Chart data={item} key={item.id} />
        ))}
      </Charts>

      {data.length !== 0 && (
        <ColorCont>

          {grades.map(grade => {
            return (
              <div key={grade.title}>
                <Dot color={grade.color} />
                <h3>{grade.title}</h3>
              </div>
            )
          })}
        </ColorCont>
      )}

      {data.length === 0 && (
        <Loader>
          <SquareLoader color='#ED6519' loading size={50} css={override} />
          <SquareLoader color='#3B484F' loading size={50} css={override} />
        </Loader>
      )}

    </div>
  )
}

export default Statistics

// Quota exceeded
