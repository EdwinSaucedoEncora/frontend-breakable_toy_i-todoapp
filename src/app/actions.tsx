"use server";
import http from "../http-common";

export async function taskAction(form: FormData) {
	const id = form.get("id");
	const name = form.get("name");
	const dueDate = form.get("dueDate");
	const priority = form.get("priorities");

	if (id) {
		const body = {
			name,
			dueDate,
			priority,
			id,
			doneDate: form.get("doneDate"),
			updatedAt: form.get("updatedAt"),
			createdAt: form.get("createdAt"),
		};
		http.put(`/todos/${id}`, body);
	} else {
		const json = JSON.stringify({
			name,
			dueDate,
			priority,
		});
		http.post("/todos", { name, dueDate, priority });
	}
}
