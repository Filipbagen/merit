import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

// height: 100px;
// margin: 10px;
// width: 100vw;

const Diagram = styled.div`
  height: 250px;
`
// U, 3, 4, 5
const colors = ['#f9e0e6', '#ED6519', '#e0f1f2', '#dbebf9']
let color = ''

const Chart = ({ data }) => {
  const pieData = data.grades.map((grade, i) => {
    switch (grade.grade) {
      case '5': color = colors[0]
        break

      case '4': color = colors[1]
        break

      case '3': color = colors[2]
        break

      case 'U': color = colors[3]
        break

      default:
    }
    return ({ title: grade.grade, value: grade.quantity, color: color })
  })

  // animate animationDuration={500} animationEasing='ease-in' paddingAngle={2}
  // (labelRenderProps) => string | number | ReactElement

  // console.log(data)

  return (
    <Diagram>
      <PieChart
        data={pieData}
        lineWidth={55}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% ${dataEntry.value}`}
        labelStyle={() => ({
          fontSize: '5px',
          fontFamily: 'Barlow'
        })}
        radius={42}
        labelPosition={100}
      />
    </Diagram>
  )
}

export default Chart
