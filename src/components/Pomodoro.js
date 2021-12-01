import { useState } from 'react'
import useInterval from '../misc/useInterval'
import styled from 'styled-components'
import { BsPlayCircle, BsPauseCircle, BsArrowRepeat } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'

const AllButts = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  font-family: "Barlow";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
`

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
`

const PlayContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: space-evenly;
`

const Play = styled.div`
  color: black;
`

const Clock = styled.div`
  font-size: 72px;
  color: black;
`

const Text = styled.div`
  color: black;
`

const Vector = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  background-color: #12293b;
  height: 100px;
  border-radius: 20px 20px 0px 0px;
  z-indez: -1;
`

const Back = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
`

// Component
const Pomodoro = () => {
  // var colChange = document.querySelector(".Clock");
  const [seconds, setSeconds] = useState(25 * 60)
  const [message, setDisplayMessage] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [delay] = useState(1000)
  const [paused, setPaused] = useState(true)
  const [vila, setVila] = useState(5 * 60 + 5)

  useInterval(
    () => {
      if (seconds === 0 && vila === 0) {
        setSeconds(25 * 60)
        setVila(5 * 60)
        setDisplayMessage(false)
      } else if (seconds - 1 < 0 && vila > 0) {
        setVila(vila - 1)
        setDisplayMessage(true)
        setIsRunning(true)
      } else if (vila - 1 < 0 && seconds - 1 < 0) {
        setSeconds(25 * 60)
        setSeconds(seconds - 1)
        setDisplayMessage(false)
        setIsRunning(true)
      } else {
        setSeconds(seconds - 1)
        setIsRunning(true)
      }
    },
    isRunning ? delay : null
  )

  const timerMinutes =
    Math.floor(seconds / 60) < 10
      ? '0' + Math.floor(seconds / 60)
      : Math.floor(seconds / 60)
  const timerSeconds = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60

  const timerVilaMin =
    Math.floor(vila / 60) < 10
      ? '0' + Math.floor(vila / 60)
      : Math.floor(vila / 60)
  const timerVilaSec = vila % 60 < 10 ? '0' + (vila % 60) : vila % 60

  return (
    <AllButts>
      <Back href='/'>
        <BiArrowBack size={50} />
      </Back>

      <Clock className='Clock'>
        {message
          ? (
            <p>
              <Text>Vila</Text>
              {timerVilaMin}:{timerVilaSec}
            </p>
            )
          : (
            <p>
              {timerMinutes}:{timerSeconds}
            </p>
            )}
      </Clock>

      <PlayContainer>
        {paused
          ? (
            <Play
              onClick={() => {
                setIsRunning(true)
                setPaused(false)
              }}
            >
              <BsPlayCircle size={100} />
            </Play>
            )
          : (
            <Play
              onClick={() => {
                setIsRunning(false)
                setPaused(true)
              }}
            >
              <BsPauseCircle size={100} color='#ED6519' />
            </Play>
            )}
      </PlayContainer>

      <Vector />

      <Drawer>
        <TimerButts
          onClick={() => {
            setSeconds(25 * 60)
            setDisplayMessage(false)
            setIsRunning(false)
            setPaused(true)
            // colChange.style.color = "#000000";
          }}
        >
          <BsArrowRepeat />
        </TimerButts>

        {/* <TimerButts onClick={() => setSeconds(7)}>Ställ in</TimerButts> */}
      </Drawer>
    </AllButts>
  )
}

export default Pomodoro
