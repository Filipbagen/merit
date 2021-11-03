import { useEffect, useState } from "react"
import useInterval from "../misc/useInterval";

// Component
const Pomodoro = () => {

	const [seconds, setSeconds] = useState(25*60);
	const [message, setDisplayMessage] = useState(false);

	useInterval(() => {
		// Your custom logic here
		if(seconds -1 < 1){
			setSeconds(0)
		}else{
		setSeconds(seconds - 1);
		}
	  }, 1000);

	const timerMinutes = Math.floor(seconds/60);
	const timerSeconds = seconds%60

	return (
		<div>
			<div>
				<button onClick={()=>setSeconds(25*60)}>Nollställ</button>
				<br></br>
				<button>Pause</button>
				<br></br>
				<button onClick={()=>setSeconds(7)}>Ställ in</button>
			</div>
			{message && <div>Vila</div>}
			{timerMinutes}:{timerSeconds}
		</div>
	  
	)
  }
  
  export default Pomodoro
  