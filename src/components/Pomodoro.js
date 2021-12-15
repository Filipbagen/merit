import { useState } from 'react'
import useInterval from '../misc/useInterval'
import styled from 'styled-components'
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
import BackBtn from './BackBtn'

const AllButts = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  font-family: 'Barlow';
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
  z-index: 2;
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
  color: #3b484f;
  font-size: 30px;
`

const Vector = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: #12293b;
  height: 100px;
  border-radius: 44px 0 0 0;
  &:after {
    content: '';
    position: absolute;
    top: -100px;
    right: 0;
    height: 100px;
    width: 100px;
    border-bottom-right-radius: 50%;
    box-shadow: 0 50px 0 0 #12293b;
    pointer-events: none;
  }
`

const Time = styled.div`
  margin: 0;
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

  const timerMinutes = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60)
  const timerSeconds = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60

  const timerVilaMin = Math.floor(vila / 60) < 10 ? '0' + Math.floor(vila / 60) : Math.floor(vila / 60)
  const timerVilaSec = vila % 60 < 10 ? '0' + (vila % 60) : vila % 60

  return (
    <AllButts>
      <BackBtn />

      <Clock className='Clock'>
        {message
          ? (
            <Time>
              <Text>Vila</Text>
              {timerVilaMin}:{timerVilaSec}
            </Time>
            )
          : (
            <Time>
              <Text>Plugga</Text>
              {timerMinutes}:{timerSeconds}
            </Time>
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

      <Vector>
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
            Plugga
          </TimerButts>

          <TimerButts onClick={() => setSeconds(0)}>Vila</TimerButts>
        </Drawer>
      </Vector>
    </AllButts>
  )
}

export default Pomodoro
