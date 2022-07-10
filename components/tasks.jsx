import Task from "./task"
export default function tasks() {
	let theTasks = [
		{
			name: "DSA",
			notes: ["remember toooo", "lalala"],
			status: "on process",
			done: 0,
			mustDo: 2,
		},
	]
	return (
		<div className="tasks">
			<div className="tasks_title">Tasks</div>
			<div className="tasks_container">
				{theTasks.map(el=> <Task name={el.name} notes={el.notes} status={el.status} done={el.done} mustDo={el.mustDo}/>)}
				<div className="tasks_container_add-task">
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