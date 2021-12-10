import styled from 'styled-components'
import { courseData } from './CourseMap'

const Container = styled.div`
  margin: 0 30px;
`

const Books = styled.p`
  margin: 0;
  padding-bottom: 20px;
`

const LiteratureHeading = styled.h3`
  font-family: 'Barlow';
  margin: 0 0 6px 0;
`

const Text = styled.p`
  font-size: 23px;
  padding: 0 0 15px 30px;
  font-family: Barlow;
  align-self: flex-start;
  color: rgb(60, 60, 60);
  margin: 35px 0px 0px;
`

const AltText = styled.p`
  margin-top: 10px;
`

// console.log(courseData)

const Literature = ({ courseCode }) => {
  const activeCourse = courseData.find(course => course.coursecCode === courseCode)

  const books = activeCourse.literature.split('#')[0]
  const compendium = activeCourse.literature.split('#')[1]

  return (
    <div>
      <Text>Kurslitteratur</Text>
      <Container>
        <LiteratureHeading>Böcker</LiteratureHeading>
        {books
          ? (
            <div>
              <Books>{books}</Books>
            </div>)
          : (
            <AltText>Inga böcker behövs för denna kurs</AltText>
            )}

        <LiteratureHeading>Kompendier</LiteratureHeading>
        {compendium
          ? (
            <div>
              <Books>{compendium}</Books>
            </div>)
          : (
            <AltText>Inga kompendier behövs för denna kurs</AltText>
            )}

      </Container>
    </div>
  )
}

export default Literature
