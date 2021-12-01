import { useEffect, useState } from 'react'
import Chart from './Chart'
import { PropagateLoader } from 'react-spinners'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

// array med alla modules

const moduleTypes = ['TEN1', 'DAT1', 'KTR1', 'KTR2', 'KTR3', 'PRA1']

const Statistics = ({ courseCode }) => {
  const Loader = styled.div`
    display: flex;
    justify-constent: center;
`

  const [data, setData] = useState([])

  const fetchStatics = async () => {
    let resData = []
    let index = 0

    do {
      // console.log(courseCode, 'courseCode')
      const url = new URL('https://liu-server.herokuapp.com/statistics')
      // console.log('looking for: ' + moduleTypes[index])
      const params = { course: courseCode, module: moduleTypes[index] }
      url.search = new URLSearchParams(params).toString()
      const res = await window.fetch(url)
      resData = await res.json()
      index++
      if (index > moduleTypes.length) {
        window.alert('Ingen data hittades')
        break
      }
      // console.log(resData)
    } while (resData.length === 0)

    setData(resData.map(item => {
      return { ...item, id: uuidv4() }
    }))

    // console.log(resData)
  }

  useEffect(() => {
    fetchStatics()
  }, [])

  return (
    <Loader>
      {data.length === 0 && <PropagateLoader color='#ED6519' loading size={20} />}
      {data.slice(0, 3).map(item => <Chart data={item} key={item.id} />)}
    </Loader>
  )
}

export default Statistics
