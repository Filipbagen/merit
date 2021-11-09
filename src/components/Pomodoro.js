import { useEffect, useState } from "react";
import useInterval from "../misc/useInterval";
import styled from "styled-components";
import { BsPlayCircle } from "react-icons/bs";
import { BsPauseCircle } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllButts = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  font-family: "Barlow";

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Drawer = styled.div`
  background-color: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  border-radius: 0px 0px 0px 0px;
`;
const TimerButts = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
  width: 40vw;
  height: 60px;
  border-radius: 10px;

  font-size: 24px;
`;
const PlayContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  height: 150px;
  align-items: center;
  justify-content: space-evenly;
`;

const Play = styled.div`
  color: black;
`;
const Clock = styled.div`
  font-size: 72px;
  color: black;
`;
const Text = styled.div`
  color: black;
`;
const Vector = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  z-indez: -1;
`;

// Component
const Pomodoro = () => {
  var colChange = document.querySelector(".Clock");
  const [seconds, setSeconds] = useState(25 * 60);
  const [message, setDisplayMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [paused, setPaused] = useState(true);

  useInterval(
    () => {
      // Your custom logic here
      //colChange.style.color = "#000000";

      if (seconds - 1 < 1) {
        setSeconds(5 * 60 + 5);
        setDisplayMessage(true);
        setIsRunning(true);
      } else {
        setSeconds(seconds - 1);
        setIsRunning(true);
        //colChange.style.color = "#ED6519";
      }
    },
    isRunning ? delay : null
  );

  const timerMinutes =
    Math.floor(seconds / 60) < 10
      ? "0" + Math.floor(seconds / 60)
      : Math.floor(seconds / 60);
  const timerSeconds = seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;

  return (
    <AllButts>
      <Clock className="Clock">
        {message && <Text>Vila</Text>}
        {timerMinutes}:{timerSeconds}
      </Clock>

      <PlayContainer>
        {paused ? (
          <Play
            onClick={() => {
              setIsRunning(true);
              setPaused(false);
            }}
          >
            <BsPlayCircle size={100} />
          </Play>
        ) : (
          <Play
            onClick={() => {
              setIsRunning(false);
              setPaused(true);
            }}
          >
            <BsPauseCircle size={100} color={"#ED6519"} />
          </Play>
        )}
      </PlayContainer>

      <Vector
        width="390"
        height="160"
        viewBox="0 0 390 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M346 53.0411C376.439 53.0411 389.332 14.8862 390 -3.05176e-05L390 285L3.05176e-05 285L1.50675e-05 108.272C1.17111e-05 69.8789 26 53.0411 44.5 53.0411L346 53.0411Z"
          fill="#12293B"
        />
      </Vector>

      <Drawer>
        <TimerButts
          onClick={() => {
            setSeconds(25 * 60);
            setDisplayMessage(false);
            setIsRunning(false);
            setPaused(true);
            colChange.style.color = "#000000";
          }}
        >
          <BsArrowRepeat />
        </TimerButts>

        <TimerButts onClick={() => setSeconds(7)}>Ställ in</TimerButts>
      </Drawer>
    </AllButts>
  );
};

export default Pomodoro;
