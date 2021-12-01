import styled from 'styled-components'

const Ex = ({ courseCode, courseName, courseType, courseDate, courseTime }) => {

const Box = styled.div`
    height: 45px;
    width: 170px;
    margin: 10px;
    padding: 22px;
    border-radius: 10px;
    background-color: #F9F9F;
    color: black; 
    text-decoration: none;
    background: radial-gradient(89.56% 82.57% at 49.53% 26.61%, #F9F9F9 0%, #F7F7F7 23.3%, #FFFFFF 100%);
`

const Name = styled.div`
    text-align: left; 
    font-size: 30px;
    font-weight: bold:
    color: red; 
`
const Code = styled.div`
    width: 120px;
    text-align: left;
    font-size: 20px;
    font-family: Barlow;
`
const Type = styled.div`
    width: 120px;
    text-align: left;
    font-size: 14px;
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
    return (
        <Box>
            <Code>{courseCode} </Code>
            <Date>{courseDate} <br /> {courseTime} </Date>
        </Box>
    )
}

export default Ex
