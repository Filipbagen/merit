import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
height: 100px;
width: 100px;
margin: 16px -5px 15px 30px;
padding: 20px;
box-shadow: 0px 0px 15px rgba(33, 33, 33, 0.2);
border-radius: 14px;
background-color: #F9F9F;
color: black; 
text-decoration: none;
`

const Name = styled.div`
text-align: left; 
font-size: 18px;
font-family: Halant;
font-weight: light;
`

const Code = styled.div`
font-family: Barlow;
font-size: 30px;
`

const Course = ({ courseCode, courseName }) => {
  const detailedPath = '/merit/' + courseCode

  return (
    <Link to={detailedPath} style={{ textDecoration: 'none', color: 'black' }}>
      <Box>
        <Code>{courseCode}</Code>
        <Name>{courseName}</Name>
      </Box>
    </Link>
  )
}

export default Course
