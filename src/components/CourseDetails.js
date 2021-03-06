import styled from 'styled-components'
import { useParams } from 'react-router'
import Statistics from './Statistics'
import Exmap from './Exmap'
import BackBtn from './BackBtn'
import Literature from './Literature'
// import Background from './Background'

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #d7c0d0;
  justify-content: space-evenly;
`

const Content = styled.div`
{
  top: 15px;
  min-height: 80vh;
  position: relative;
  background-color: white;
  border-radius: 44px 0 0 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 30px 8px rgba(0, 0, 0, 0.1);
}
&:after {
  content: "";
  position: absolute;
  top: -100px;
  right: 0;
  height: 100px;
  width: 100px;
  border-bottom-right-radius: 50%;
  box-shadow: 0 50px 0 0 #fff;
  pointer-events: none;
}
`

const Text = styled.p`
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-size: 36px;
  text-align: center;
  padding: 48px 0;
`

// console.log(courseData)

const CourseDetails = () => {
  const { courseCode } = useParams()

  return (
    <Container>
      <BackBtn />
      <Text>{courseCode}</Text>

      <Content>
        <Exmap courseCode={courseCode} />
        <Statistics courseCode={courseCode} />

        <Literature courseCode={courseCode} />

      </Content>
    </Container>
  )
}

export default CourseDetails
