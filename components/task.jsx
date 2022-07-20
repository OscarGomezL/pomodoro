import { useState, useEffect } from "react"
import { deleteTask, changeTaskName } from "../logic/swal"
import { useDispatch, useSelector } from "react-redux"
import { logger } from "../redux/actions"

export default function task({index}) {
	let {name, status, done, mustDo} = useSelector(s=>s.log).tasks[index]

	const [selected, setSelected] = useState(false)
	const [beingEdited, setBeingEdited]  = useState(false)
	const [completed, setCompleted] = useState(status === 'completed')
	const dispatch = useDispatch()
	useEffect(() => {
		if(done >= mustDo) {
			setCompleted(true)
		}
	}, [done, mustDo])
	return (
		<div className={`task ${beingEdited ? 'editing-task' : ""} ${completed ? 'completed' : ""}`}>
			<div className={`visible  ${beingEdited ? 'editing-visible' : ""}`}>
				<div className={`task_name ${completed ? 'completed' : ""}`}>{name}</div>
				<div 
					className={`task_selection ${selected ? 'task_selected' : ""} ${completed ? 'completed' : ""}`}
					onClick={()=>{setSelected(!selected)}}
				>
				</div>
				<div className="task_quantity">
					{done} / {mustDo}
				</div>
				<div 
					className="task_settings"
					onClick={()=>setBeingEdited(!beingEdited)}
					>
					<img src={`/${completed ? 'settings-completed.png ' : "settings-normal.png"}`} alt="" />
				</div>
			</div>
			<div className={`crud_controls`}>
				<div 
					className={`crud_controls_name ${completed ? 'completed' : ""}`}
					onClick={()=>changeTaskName(index)}
				>
					Change Name
				</div>
				<div 
					className={`crud_controls_delete ${completed ? 'completed' : ""}`}
					onClick={()=>deleteTask(index)}
				>
					Delete
				</div>
				<div 
					className={`crud_controls_quantity ${completed ? 'completed' : ""}`}
					onClick={()=>{
						let user = JSON.parse(localStorage.getItem("User"))
						user.tasks[index].mustDo !== 1 ? user.tasks[index].mustDo-- : ""
						dispatch(logger('PATCH', user))
						localStorage.setItem('User', JSON.stringify(user))
					}}
				>
					-
				</div>
				<div 
					className={`crud_controls_quantity ${completed ? 'completed' : ""}`}
					onClick={()=>{
						let user = JSON.parse(localStorage.getItem("User"))
						user.tasks[index].mustDo++
						dispatch(logger('PATCH', user))
						localStorage.setItem('User', JSON.stringify(user))
					}}
				>
					+
				</div>
			</div>
		</div>
	)
}