import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function timer() {
	const [playing, setPlaying] = useState(false)
	let log = useSelector(s=>s.log)
	// -----------------------------------------------------------------------------------------------
	const [time, setTime] = useState({s:0, m:25});
	const [onPomodoro, setOnPomodoro] = useState()
  	const [interv, setInterv] = useState();
	const [status, setStatus] = useState(0);
	// Not started = 0
	// started = 1
	// stopped = 2

	const start = () => {
		run();
		setStatus(1);
		setInterv(setInterval(run, 1000));
	};

	let updatedS = time.s, updatedM = time.m

	const run = () => {
		if(updatedS === 0){
		updatedM--;
		updatedS = 60;
		}
		updatedS--;
		return setTime({s:updatedS, m:updatedM });
	};

	const stop = () => {
		clearInterval(interv);
		setStatus(2);
	};

	const resume = () => start();

	// -----------------------------------------------------------------------------------------------
	return (
		<div className="timer">
			<div className="timer_container">
				<div className="timer_container_status">
					<div>
						{log.currentTask ? `Working on ${log.currentTask}` : "Select a task to start working"}
					</div>
				</div>
				<div className="timer_container_timer">
					<div>
						{
							//days + hours + minutes + seconds <= 0 ? 'Expired' : "Not expired"
							[time.m, ':', time.s<10 ? '0' : "", time.s]
						}
					</div>
				</div>
				<div 
					className="timer_container_toggler"
					onClick={()=>{
						status === 0 ? start() : ""
						status === 1 ? stop() : ""
						status === 2 ? resume() : ""
					}}
				>
					<div>
						{status === 0 ? "Start" : ""}
						{status === 1 ? "Stop" : ""}
						{status === 2 ? "Resume" : ""}
					</div>
				</div>
			</div>
		</div>
	)
}