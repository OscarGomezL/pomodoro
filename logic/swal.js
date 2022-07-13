import swalLibrary from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const deleteTask = (id) => {
	let Swal2 = withReactContent(swalLibrary)
	Swal2.fire(
		{title: 'Are you sure you want to delete this task?',
		icon: 'warning',
		color:"var(--red4)",
		background: "var(--red3)",
		iconColor: "var(--red4)",
		confirmButtonColor: "var(--red4)",
		confirmButtonText: 'Delete'}
	)
}
export const changeTaskName = (id) => {
	let Swal2 = withReactContent(swalLibrary)
	Swal2.fire(
		{title: 'Change the name of this task',
		color:"var(--red2)",
		background: "var(--red3)",
		confirmButtonColor: "var(--red2)",
		confirmButtonText: 'Delete'}
	)
}