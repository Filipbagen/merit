import "./App.css";
// import Schedule from "./components/Schedule";
// import CSVReader from 'react-csv-reader'
import Pomodoro from "./components/Pomodoro";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Message from "./components/Message";
import Quotes from "./components/Quotes";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

// För att rendera din komponent, lägg till en länk i Dashboard.js
// och lägg till en route likt nedan.

const App = () => {
  return (
    <Router>
      <Quotes />
      <Container>
        <Routes>
          <Route path="/pomodoro" element={<Pomodoro />} />

          <Route path="/pomodoro" element={<Pomodoro />} />

          <Route path="/merit" element={<Dashboard />} />

          <Route path="/Message" element={<Message />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
