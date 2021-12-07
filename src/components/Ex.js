import styled from 'styled-components'

const Box = styled.div`
  margin: 10px -15px 10px 30px;
  padding: 12px 10px 10px 10px;
  border-radius: 10px;
  background-color: #F9F9F;
  color: black; 
  text-decoration: none;
  background: rgba(19, 42, 60, 0.04);
`
// white-space: nowrap;

const Name = styled.div`
  text-align: left;
  font-size: 20px;
  font-family: Barlow;
  white-space: nowrap;
`

const Date = styled.div`
  text-align: left; 
  font-family: Halant;
  font-size: 18px;
  color: #ED6519;
  white-space: nowrap;
`

const Ex = ({ courseCode, courseName, courseType, courseDate, courseTime }) => {
  return (
    <Box>
      <Name>{courseName}</Name>
      <Date>{courseDate} • {courseTime}</Date>
    </Box>
  )
}

export default Ex
