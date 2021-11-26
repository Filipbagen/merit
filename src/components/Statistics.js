import { useEffect, useState } from 'react'
import Chart from './Chart'
import { PropagateLoader } from 'react-spinners'
import styled from 'styled-components'

const Statistics = () => {
  const Loader = styled.div`
    display: flex;
    justify-constent: center;
`

  const [data, setData] = useState([])

  const fetchStatics = async () => {
    const url = new URL('https://liu-server.herokuapp.com/statistics')
    const params = { course: 'TNA004', module: 'TEN1' }
    url.search = new URLSearchParams(params).toString()
    const res = await window.fetch(url)
    const resData = await res.json()
    setData(resData)
    console.log(resData)
  }

  useEffect(() => {
    fetchStatics()
  }, [])

  return (
    <Loader>
      {data.length === 0 && <PropagateLoader color='#ED6519' loading size={20} />}
      {data.slice(0, 3).map(item => <Chart data={item} />)}
    </Loader>
  )
}

export default Statistics
