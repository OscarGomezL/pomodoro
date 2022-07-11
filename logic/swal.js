import Swal2 from "sweetalert2"

export const add = () => {
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
	})
}