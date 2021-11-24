import styled from "styled-components";
import React from "react";

const Circle = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-top: 85px;
  margin-left: 20px;
  background-color: white;
  text-align: center;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Week = styled.div`
  display: flex;
`;

const CircleYeet = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: #ed6519;
  margin-top: 85px;
  margin-left: 20px;
  text-align: center;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Calendar = () => {
  return (
    <Week>
      <Circle>
        Må <br></br>13
      </Circle>
      <Circle>
        Ti <br></br>14{" "}
      </Circle>
      <CircleYeet>
        Ons
        <br></br>15
      </CircleYeet>
      <Circle>
        Tor<br></br>16
      </Circle>
      <Circle>
        Fre
        <br></br>17
      </Circle>
    </Week>
  );
};

export default Calendar;
