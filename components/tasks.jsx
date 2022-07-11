import {useState, useEffect} from 'react'
import Task from "./task"
import Swal2 from "sweetalert2"

import { logger } from '../redux/actions'
import { useDispatch, useSelector } from "react-redux"

export default function tasks() {
	let log = useSelector(s=>s.log)
	const [tasks, setTasks] = useState()
	const dispatch = useDispatch()
	useEffect(() => {
		setTasks(log ? log.tasks : [])
	}, [log]);
	const add = () => {
		Swal2.fire({
			title: "Add a Task",
			text: 'Try clicking the "My Account" button',
			html: `
				<form autocomplete="off">
					<input id="login-swal-input-1" type="text" placeholder="What Are You Working On?" class="swal2-input" required="true"/>
				</form>
			`,
			color:"var(--red2)",
			background: "var(--red3)",
			confirmButtonColor: "var(--red2)",
			preConfirm: function() {
				return new Promise((res,rej) =>{
					res({
						name: document.getElementById(`login-swal-input-1`).value
					})
				})
			}
		})
		.then(s=>{
			let user = JSON.parse(localStorage.getItem('User'))
			user.tasks.push({name:s.value.name, notes: [], status:"", done: 0, mustDo:1})
			localStorage.setItem('User', JSON.stringify(user))
			dispatch(logger('PATCH', user))
		})
		.catch(console.log)
	}
	if(tasks === undefined) return null
	return (
		<div className="tasks">
			<div className="tasks_title">Tasks</div>
			<div className="tasks_container">
				{tasks.map(el=> <Task name={el.name} notes={el.notes} status={el.status} done={el.done} mustDo={el.mustDo}/>)}
				<div 
					className="tasks_container_add-task"
					onClick={()=>add()}
				>
					Add Task
				</div>
			</div>
			<div className="tasks_stats">
				Done : 4
				Total : 10
				Finish At : 15:45
			</div>
		</div>
	)
}