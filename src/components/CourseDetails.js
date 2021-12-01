import styled from 'styled-components'
import { useParams } from 'react-router'
import Statistics from './Statistics'
import Exmap from './Exmap'
import { BiArrowBack } from 'react-icons/bi'
// import Background from './Background'

const Content = styled.div`
min-height: 80vh;
background-color: white;
border-radius: 44px 44px 0px 0px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
align-items: center;
`
const Back = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
`

const CourseDetails = () => {
  const { courseCode } = useParams()

  return (
    <Content>
      <Back href='/'>
        <BiArrowBack size={50} />
      </Back>
      <h1>{courseCode}</h1>
      <Statistics courseCode={courseCode} />
      <Exmap courseCode={courseCode} />
    </Content>
  )
}

export default CourseDetails
