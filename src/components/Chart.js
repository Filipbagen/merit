import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

// height: 100px;
// margin: 10px;
// width: 100vw;

const Diagram = styled.div`
  height: 220px;
`
// U, 3, 4, 5
const colors = ['#3B484F', '#ED6519', '#C4C4C4', '#F5AD85']
let color = ''

const Chart = ({ data }) => {
  const pieData = data.grades.map((grade, i) => {
    switch (grade.grade) {
      case '5':
        color = colors[3]
        break

      case '4':
        color = colors[2]
        break

      case '3':
        color = colors[0]
        break

      case 'U':
        color = colors[1]
        break

      default:
    }
    return { title: grade.grade, value: grade.quantity, color: color }
  })

  // animate animationDuration={500} animationEasing='ease-in' paddingAngle={2}
  // (labelRenderProps) => string | number | ReactElement

  // console.log(data)

  return (
    <div>
      <h3>{data.moduleCode} - {JSON.stringify(data.examinationDate).slice(1, 11)}</h3>
      <Diagram>
        <PieChart
          data={pieData}
          animate animationDuration={500}
          animationEasing='ease-in'
          paddingAngle={1}
          color='white'
          lineWidth={55}
          label={({ dataEntry }) => ` ${Math.round(dataEntry.percentage)}% `}
          labelStyle={() => ({
            fontSize: '8px',
            fontFamily: 'Barlow',
            fill: 'black'
          })}
          radius={42}
          labelPosition={110}
        />
      </Diagram>
    </div>
  )
}

export default Chart
