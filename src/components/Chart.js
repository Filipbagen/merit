import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

const Diagram = styled.div`
  height: 200px;
`

const Chart = ({ data }) => {
  console.log(data.grades)

  const pieData = data.grades.map((grade, i) => {
    const color = i === 1 ? '#3B484F' : '#ED6519'
    return ({ title: grade.grade, value: grade.quantity, color: color }) // switch case
  })

  return (
    <Diagram>
      <PieChart data={pieData} />
    </Diagram>
  )
}

export default Chart
