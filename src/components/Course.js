import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Course = ({ courseCode, courseName }) => {
  const Box = styled.div`
    height: 120px;
    width: 120px;
    margin: 16px;
    padding: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #F9F9F;
    color: black; 
    text-decoration: none;
`

  const Name = styled.div`
    text-align: left; 
    font-size: 15px;
    font-family: Barlow;
    
`

  const Code = styled.div`
    width: 120px;
    text-align: left;
    font-size: 25px;
    font-weight: bold:
    font-family: Barlow;
`

  const detailedPath = '/merit/' + courseCode

  return (
    <Link to={detailedPath} style = {{textDecoration: 'none', color: 'black',}}>
      <Box>
        <Code>{courseCode}</Code>
        <br />
        <Name>{courseName}</Name>
      </Box>
    </Link>
  )
}

export default Course
