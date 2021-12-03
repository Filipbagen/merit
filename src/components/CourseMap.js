import React from 'react'
import Course from './Course'
import styled from 'styled-components'

const Total = styled.div`
width: 100vw;
overflow: auto;
display: flex;
&::-webkit-scrollbar {
  display: none;
}
`

const CourseMap = () => {
  const courseData = [
    // { coursecCode: 'TNA001', name: 'Matematisk grundkurs', preCourse: '', literature: 'Matematisk analys, en variabel', about: null },
  //   { coursecCode: 'TND012', name: 'Programmering grk', preCourse: '', literature: 'Programming: Principles and Practice Using C++#C++ direkt#C++ Primer ', about: null },
  //   { coursecCode: 'TNM088', name: 'Digitala medier', preCourse: '', literature: '', about: null },
  //   { coursecCode: 'TNA002', name: 'Linjär algebra', preCourse: 'TNA001', literature: 'Linjär algebra TNA002', about: null },
  //   { coursecCode: 'TNMK30', name: 'Elektronisk publicering', preCourse: 'TND012', literature: '', about: null },
  //   { coursecCode: 'TNA005', name: 'Tillämpad matematik i teknik och naturvetenskap', preCourse: 'TNA001, TNA002', literature: 'MATLAB-beräkningar inabout teknik och naturvetenskap : med symbolisk matematik#Matematisk analys, en variabel#Linjär algebra TNA002', about: null },
  //   { coursecCode: 'TNA003', name: 'Analys I', preCourse: 'TNA001', literature: 'Matematisk analys, en variabel', about: null },
  //   { coursecCode: 'TND002', name: 'Objektorienterad programmering', preCourse: 'TND012', literature: '', about: null },
  //   { coursecCode: 'TNA004', name: 'Analys II', preCourse: 'TNA003', literature: 'Matematisk analys, en variabel', about: null },
  //   { coursecCode: 'TNM046', name: 'Datorgrafik', preCourse: 'TND012, TNA002, TND002', literature: '', about: null },
    { coursecCode: 'TNA006', name: 'Analys III', preCourse: 'TNA004, TNA003, TNA001', literature: 'Matematisk analys : flera variabler#Problemsamling för kursen TNA006', about: null },
    { coursecCode: 'TNE043', name: 'Mekanik och vågfysik', preCourse: 'TNA002, TNA003, TNA004', literature: 'Principles of physics#Experimentell problemlösning', about: null },
    { coursecCode: 'TNM040', name: 'Komunikation och användargränssnitt', preCourse: 'TNMK30', literature: '', about: null },
    { coursecCode: 'TNA007', name: 'Vektoranalys', preCourse: 'TNA002, TNA003, TNA004, TNA006', literature: 'Vektoranalys', about: null },
    { coursecCode: 'TNG033', name: 'Programmering i C++', preCourse: 'TND012, TND002', literature: 'C++ direkt#Professional C++#C++ Primer#Matematisk analys, en variabel', about: null },
    { coursecCode: 'TNG032', name: 'Tillämpad transformteori', preCourse: 'TNA002, TNA003, TNA004', literature: 'Fourier and Laplace Transforms', about: null }
    // { coursecCode: 'TNM059', name: 'Grafisk teknik', preCourse: 'TNA002', literature: '', about: null },
    // { coursecCode: 'TNM061', name: '3-D Datorgrafik', preCourse: 'TNM046', literature: '', about: null },
    // { coursecCode: 'TNG006', name: 'Matematisk statistik', preCourse: 'TNA006', literature: 'Sannolikhetsteori och statistikteori med tillämpningar#Problemsamling för kursen TNG006#Formelsamling i matematisk statistik', about: null },
    // { coursecCode: 'TNG015', name: 'Signaler och system', preCourse: 'TNA002, TNG032', literature: 'Fundamentals of Signals and Systems Using the Web and Matlab', about: null },
    // { coursecCode: 'TFYA65', name: 'Ljudfysik', preCourse: 'TNE043', literature: 'Master Handbook of Acoustics#Principles of Digital Audio', about: null },
    // { coursecCode: 'TNG028', name: 'Reglerteknik', preCourse: 'TNG032, TNG015', literature: 'Reglerteknik - Grundläggande teori', about: null },
    // { coursecCode: 'TNM093', name: 'Tillämpad visualisering och virtuell verklighet', preCourse: 'TNA002, TNA003, TNA004, TNG033, TND002, TNM061', literature: 'The Visualization Handbook#Essential Virtual Reality fast#Information Visualization: Design for Interaction', about: null },
    // { coursecCode: 'TNG022', name: 'Modellbygge och simulering', preCourse: 'TNG006, TNG028', literature: 'Modellbygge och simulering#Modellbygge och simulering, Övningsbok', about: null },
    // { coursecCode: 'TNM087', name: 'Bildbehandling och bildanalys', preCourse: 'TNA002, TNA006, TNG015, TNA005, TNM059, TNG032', literature: 'Digital Image Processing', about: null },
    // { coursecCode: 'TNM085', name: 'Modelleringsprojekt', preCourse: 'TNG022', literature: '', about: null },
    // { coursecCode: 'TND004', name: 'Datastrukturer', preCourse: 'TNG033', literature: 'Data Structure and Algorithm Analysis in C++', about: null },
    // { coursecCode: 'TEIO87', name: 'Projektledning', preCourse: '', literature: 'Psykologi för projektledare', about: null },
    // { coursecCode: 'TGTU94', name: 'Teknik och etik', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TNCG15', name: 'Advanced Global Illumination and Rendering', preCourse: 'TNM046, TNM061', literature: 'Advanced Global Illumination#Physically Based Rendering: Frabout Theory to Implementation', about: null },
    // { coursecCode: 'TNM031', name: 'Nätverksprogrammering och säkerhet', preCourse: 'TNMK30, TND004', literature: '', about: null },
    // { coursecCode: 'TNM067', name: 'Vetenskaplig visualisering', preCourse: 'TNM046, TNE043', literature: 'Visualization Analysis and Design#The Visualization Toolkit, An Object-Oriented Approach To 3D Graphics#Data Visualization: Principles and Practice', about: null },
    // { coursecCode: 'TNM103', name: 'Ljudteknik', preCourse: 'TNG015, TNG032, TFYA65, TND012', literature: '', about: null },
    // { coursecCode: 'TNM108', name: 'Maskininlärning för sociala medier', preCourse: 'TNG006, TNA003, TNA004, TNA006, TNA002, TND012', literature: '', about: null },
    // { coursecCode: 'TEAE11', name: 'Immaterialrätt', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TNA010', name: 'Matrismetoder för AI', preCourse: 'TNA002, TNA006, TNG006, TNA005', literature: 'Matrix Methods in Data Mining and Pattern Recognition', about: null },
    // { coursecCode: 'TNM034', name: 'Avancerad bildbehandling', preCourse: 'TNM087, TNA005', literature: '', about: null },
    // { coursecCode: 'TNM069', name: 'Grafisk design och kaboutmunikation', preCourse: 'TNM059, TNM040', literature: 'Effektiv visuell kaboutmunikation', about: null },
    // { coursecCode: 'TNM086', name: 'VR-teknik', preCourse: 'TNM061, TNA002, TNG033, TNM046', literature: '', about: null },
    // { coursecCode: 'TNM091', name: 'Medieproduktion för immersiva miljöer', preCourse: 'TNG033, TNM061, TFYA65', literature: '', about: null },
    // { coursecCode: 'TEIE53', name: 'Industriell ekonabouti', preCourse: 'TNA001', literature: 'Företagsekonabouti - från begrepp till beslut', about: null },
    // { coursecCode: 'TNKA10', name: 'Retorik i tal, text och bild', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TNM048', name: 'Informationsvisualisering', preCourse: 'TND012, TNM046, TNMK30', literature: 'Information Visualization: Design for Interaction', about: null },
    // { coursecCode: 'TNM097', name: 'Bildreproduktion och bildkvalitet', preCourse: 'TNM059, TNM087, TNA005', literature: '', about: null },
    // { coursecCode: 'TNM100', name: 'Strukturerade metoder för användarupplevelse (UX)', preCourse: 'TNM040', literature: 'Interaktionsdesign och UX – about att skapa en god användarupplevelse', about: null },
    // { coursecCode: 'TSBK35', name: 'Kaboutpression av ljud och bild', preCourse: 'TNG006, TNG015', literature: 'Introduction to Data Caboutpression', about: null },
    // { coursecCode: 'TDDD27', name: 'Avancerad webbprogrammering', preCourse: 'TND012, TNG033, TNMK30, TNM040', literature: '', about: null },
    // { coursecCode: 'TNM079', name: 'Modellering och animering', preCourse: 'TNM046, TNM061, TNA002, TNA006, TND012', literature: '', about: null },
    // { coursecCode: 'TNM096', name: 'Artificiell intelligens - principer och tekniker', preCourse: 'TND012, TND004', literature: '', about: null },
    // { coursecCode: 'TNM098', name: 'Avancerad visuell dataanalys', preCourse: 'TND012, TNM046, TNA006, TNM048', literature: 'Principles of Data Mining', about: null },
    // { coursecCode: 'TDDE45', name: 'Avancerad programvarudesign', preCourse: 'TNG033, TND002, TND004', literature: 'Head First Design Patterns#Design Patterns: Elements of Object-Oriented Software', about: null },
    // { coursecCode: 'TNM089', name: 'Bildteknik', preCourse: 'TNA002, TNG006, TNG032, TNM087, TNA005', literature: 'Digital Color Imaging Handbook#Algorithms and Applications', about: null },
    // { coursecCode: 'TNM095', name: 'Artificiell intelligens för interaktiv media', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TSBK03', name: 'Teknik för avancerade datorspel', preCourse: 'TNG033, TNM046, TNA002, TNE043', literature: 'So how can we make them scream?', about: null },
    // { coursecCode: 'TNM107', name: 'Vetenskaplig metod', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TDDC73', name: 'Interaktionsprogrammering', preCourse: 'TND012, TNG033, TND002', literature: 'Designing Interfaces', about: null },
    // { coursecCode: 'TDDD56', name: 'Multicore- och GPU-Programmering', preCourse: 'TND004, TND012', literature: '', about: null },
    // { coursecCode: 'TNM084', name: 'Procedurella metoder för bilder', preCourse: 'TNA002, TNA003, TNA004, TNA006, TNM046, TND012, TND002, TND004, TNM087', literature: 'Texturing and Modeling: a Procedural Approach', about: null },
    // { coursecCode: 'TDDD23', name: 'Design och programmering av datorspel', preCourse: 'TND002, TND012', literature: '', about: null },
    // { coursecCode: 'TDDD89', name: 'Vetenskaplig metod', preCourse: '', literature: '', about: null },
    // { coursecCode: 'TDDE02', name: 'Mjukvarutekniskt entreprenörskap', preCourse: 'TNG033, TNM046, TNG015, TNM040, TNM031, TNM096', literature: '', about: null },
    // { coursecCode: 'TNCG13', name: 'SFX - Tricks of the trade', preCourse: 'TNCG15', literature: '', about: null }
  ]

  return (
    <Total>
      {courseData.map(course => <Course courseCode={course.coursecCode} courseName={course.name} key={course.coursecCode} />)}
    </Total>
  )
}

export default CourseMap
