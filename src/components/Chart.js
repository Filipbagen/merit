import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

const Diagram = styled.div`
  height: 200px;
`

const colors = ['#3B484F', '#ED6519', 'red', 'blue']

const Chart = ({ data }) => {
  const pieData = data.grades.map((grade, i) => {
    return ({ title: grade.grade, value: grade.quantity, color: colors[i] }) // switch case
  })

  return (
    <Diagram>
      <PieChart data={pieData} />
    </Diagram>
  )
}

export default Chart
