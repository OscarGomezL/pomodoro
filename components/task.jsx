import { useState } from "react"

export default function task({name, notes, status, done, mustDo}) {
	const [selected, setSelected] = useState(false)
	return (
		<div className="task" 
			onClick={()=>{setSelected(!selected)}}
			onMouseOver={()=>{

			}}
		>
			<div 
				className={`
					task_selected 
					${selected ? "task_selected_selected" : ""}

				`}
			>
			</div>
			<div className="task_process"></div>
			<div className="task_name">{name}</div>
			<div className="task_quantity">
				<div className="task_quantity_done">{done}</div>
				<div className="task_quantity_mustDo">{mustDo}</div>
			</div>
			<div className="task_settings"></div>
		</div>
	)
}