import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Course = ({ courseCode, courseName }) => {
  const Box = styled.div`
    height: 130px;
    width: 130px;
    margin: 16px;
    padding: 20px;
    box-shadow: 3px 4px 8px rgba(18, 41, 59, 0.31);
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
    width: 120px;
    padding-top: 10px;
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 29px;
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
