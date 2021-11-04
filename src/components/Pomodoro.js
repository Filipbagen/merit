import { useEffect, useState } from "react"
import useInterval from "../misc/useInterval";
import styled from "styled-components";
import { BsPlayCircle } from 'react-icons/bs';
import {BsPauseCircle} from 'react-icons/bs';
import {BsArrowRepeat} from 'react-icons/bs';
 
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
	height: 100px;
	border-radius: 25px 25px 0px 0px;
`

const TimerButts = styled.div`
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #F6F6F6;
	width: 45vw;
	height: 40px;
	border-radius: 15px;

	font-size: 24px;
`
const PlayContainer = styled.div`
	display: flex;
	flex-direction: row;
	min-width: 100vw;
	height: 150px;
	align-items: center;
	justify-content: space-evenly;
`

const Play = styled.div`
	color: #12293B;
`
const Clock = styled.div`
	font-size: 100px;
	color: black;
	
`
const Text = styled.div`
	color: black;
`


// Component
const Pomodoro = () => {

	var colChange = document.querySelector('.Clock');
	const [seconds, setSeconds] = useState(25*60);
	const [message, setDisplayMessage] = useState(false);
	const [isRunning, setIsRunning]=useState(true);
	const[delay, setDelay]=useState(1000);

	useInterval(() => {
		// Your custom logic here
		setIsRunning(false);
		//colChange.style.color = "#000000";

		if(seconds -1 < 1){
			setSeconds(5*60+5)
			setDisplayMessage(true)
			setIsRunning(true);
		}else{
			setSeconds(seconds - 1);
			setIsRunning(true);
			//colChange.style.color = "#ED6519";
			
		}
	  },isRunning ? delay : null);

	const timerMinutes = Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60);
	const timerSeconds = seconds%60 < 10 ? "0" + seconds%60 : seconds%60;

	return (
		<AllButts>
			<Clock className="Clock">
				{message && <Text>Vila</Text>}
				{timerMinutes}:{timerSeconds}
			</Clock>

			<PlayContainer>
				<Play onClick={()=>setIsRunning(true)}><BsPlayCircle size={100} /></Play>	
				<Play onClick={()=>setIsRunning(false)}><BsPauseCircle size={100}/></Play>
			</PlayContainer>

			<Drawer>
				<TimerButts onClick={()=>{setSeconds(25*60); setDisplayMessage(false); setIsRunning(false); colChange.style.color = "#000000";}}><BsArrowRepeat/></TimerButts>

				<TimerButts onClick={()=>setSeconds(7)}>Ställ in</TimerButts>
			</Drawer>
			
		</AllButts>
	  
	)
  }
  
  export default Pomodoro
  