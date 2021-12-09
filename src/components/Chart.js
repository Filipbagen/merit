import { PieChart } from 'react-minimal-pie-chart'
import styled from 'styled-components'

// height: 100px;
// margin: 10px;
// width: 100vw;

const Diagram = styled.div`
  height: 220px;
`

const Heading = styled.h3`
  text-align: center;
`

// U, 3, 4, 5
const grades = [
  { color: '#3B484F', title: 'U' },
  { color: '#ED6519', title: '3' },
  { color: '#C4C4C4', title: '4' },
  { color: '#F5AD85', title: '5' }
]

// ['#3B484F', '#ED6519', '#C4C4C4', '#F5AD85']
const colors = grades.map((grade) => grade.color)
let color = ''
const Chart = ({ data }) => {
  const pieData = data.grades.map((grade) => {
    switch (grade.grade) {
      case '5':
        color = colors[3]
        break

      case '4':
        color = colors[2]
        break

      case '3':
        color = colors[1]
        break

      case 'U':
        color = colors[0]
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
      <Heading>{data.moduleCode}</Heading>
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
      <Heading>{JSON.stringify(data.examinationDate).slice(1, 11)}</Heading>
    </div>
  )
}

export { grades }
export default Chart
