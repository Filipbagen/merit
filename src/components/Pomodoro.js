import { useEffect, useState } from "react"
import useInterval from "../misc/useInterval";
import styled from "styled-components";
 
const AllButts = styled.div`
	flex-direction: column;
`
const Drawer = styled.div`
	background-color: #F6F6F6;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100px;
`

const TimerButts = styled.div`
	color: white;
	background-color: #12293B;
	border: none;
	border-radius: 10;
`
const Butts = styled.div`
	display: flex;
	justify-content: space-around;
	border-radius: 10;
	

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
			{message && <div>Vila</div>}
			{timerMinutes}:{timerSeconds}
			<Drawer>
			<div>
				<Butts>
					<TimerButts onClick={()=>setSeconds(25*60)}>Nollställ</TimerButts>

					<TimerButts onClick={()=>setSeconds(7)}>Ställ in</TimerButts>
				
					<TimerButts onClick={()=>setIsRunning(false)}>Pause</TimerButts>
					
					<TimerButts onClick={()=>setIsRunning(true)}>Start</TimerButts>
				</Butts>
			</div>
			</Drawer>
			
		</AllButts>
	  
	)
  }
  
  export default Pomodoro
  