import styled from 'styled-components'

const Ex = ({ courseCode, courseName, courseType, courseDate, courseTime }) => {

const Box = styled.div`
    height: 40px;
    width: 140px;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #F9F9F;
    color: black; 
    text-decoration: none;
    background: radial-gradient(89.56% 82.57% at 49.53% 26.61%, #F9F9F9 0%, #F7F7F7 23.3%, #FFFFFF 100%);
`

const Name = styled.div`
    text-align: left; 
    font-size: 18px;
`
const Code = styled.div`
    width: 120px;
    text-align: left;
    font-size: 12px;
`
const Type = styled.div`
    width: 120px;
    text-align: left;
    font-size: 12px;
`
const Date = styled.div`
    width: 120px;
    text-align: left; 
    color: orange; 
    font-size: 12px;
`
    return (
        <Box>
            <Code>{courseCode} </Code>
            <Name>{courseName} </Name> 
            <Type>{courseType} <br /> </Type> 
            <Date>{courseDate} {courseTime} </Date>
        </Box>
    )
}

export default Ex
