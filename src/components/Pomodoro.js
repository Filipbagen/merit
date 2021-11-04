import { useEffect, useState } from "react"
import useInterval from "../misc/useInterval";
import styled from "styled-components";
 
const AllButts = styled.div`
	min-height: 100vh;
	min-width: 100vw;

	font-family: 'Barlow';

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	
`
const Drawer = styled.div`
	background-color: #12293B;
	display: flex;
	flex-wrap: wrap;
	justify-content:space-around;
	align-items: center;

	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 150px;
`

const TimerButts = styled.div`
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #F6F6F6;
	width: 45vw;
	height: 60px;
	border-radius: 15px;

	font-size: 24px;

	
`
const Clock = styled.div`
	font-size: 50px;
	
	
`

// Component
const Pomodoro = () => {

	const [seconds, setSeconds] = useState(25*60);
	const [message, setDisplayMessage] = useState(false);
	const [isRunning, setIsRunning]=useState(true);
	const[delay, setDelay]=useState(1000);

	useInterval(() => {
		// Your custom logic here
		if(seconds -1 < 1){
			setSeconds(5*60)
			setDisplayMessage(true)
		}else{
		setSeconds(seconds - 1);
		}
	  },isRunning ? delay : null);

	const timerMinutes = Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60);
	const timerSeconds = seconds%60 < 10 ? "0" + seconds%60 : seconds%60;

	return (
		<AllButts>
			<Clock>
				{message && <div>Vila</div>}
				{timerMinutes}:{timerSeconds}
			</Clock>
			<Drawer>
					<TimerButts onClick={()=>setSeconds(25*60)}>Nollställ</TimerButts>

					<TimerButts onClick={()=>setSeconds(7)}>Ställ in</TimerButts>
				
					<TimerButts onClick={()=>setIsRunning(false)}>Pause</TimerButts>
					
					<TimerButts onClick={()=>setIsRunning(true)}>Start</TimerButts>
			</Drawer>
			
		</AllButts>
	  
	)
  }
  
  export default Pomodoro
  