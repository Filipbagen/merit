import styled from 'styled-components'

const Box = styled.div`
  width: 170px;
  margin: 10px;
  padding: 22px;
  border-radius: 10px;
  background-color: #F9F9F;
  color: black; 
  text-decoration: none;
  background: rgba(237, 101, 25, 0.05);
  border: 2px solid rgba(237, 101, 25, 0.2);;
`

const Code = styled.div`
  width: 120px;
  text-align: left;
  font-size: 20px;
  font-family: Barlow;
`

const Date = styled.div`
  width: 120px;
  text-align: left; 
  font-family: Halant;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #ED6519;
`

const Ex = ({ courseCode, courseName, courseType, courseDate, courseTime }) => {
  return (
    <Box>
      <Code>{courseName} </Code>
      <Date>{courseDate} • {courseTime} </Date>
    </Box>
  )
}

export default Ex
