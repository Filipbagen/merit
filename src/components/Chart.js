import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

const Diagram = styled.div`
  height: 100px;
  margin: 10px;
  width: 100vw;
`

const colors = ['#3B484F', '#ED6519', 'red', 'blue']

const Chart = ({ data }) => {
  const pieData = data.grades.map((grade, i) => {
    return ({ title: grade.grade, value: grade.quantity, color: colors[i] }) // switch case
  })

  return (
    <Diagram>
      <PieChart data={pieData} animate animationDuration={500} animationEasing='ease-in' lineWidth={55} paddingAngle={2} />
    </Diagram>
  )
}

export default Chart
