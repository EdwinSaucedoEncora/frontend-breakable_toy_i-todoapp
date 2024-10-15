import { Task } from "./tasks-columns";

// Constant Definitions
export const STATUS_TASKS = ["Done", "Undone"];
export const STATUS_PLACEHOLDER = "All, Done, Undone";

export const PRIORITY_TASKS = ["High", "Medium", "Low"];
export const PRIORITY_PLACEHOLDER = "All, High, Medium, Low";

export const TASKS_SAMPLE: Array<Task> = [
	{
		id: "1",
		name: "Task 1",
		status: "done",
		priority: "high",
		createdAt: "10/12/2024",
		updatedAt: "10/12/2024",
	},
	{
		id: "2",
		name: "Task 2",
		status: "undone",
		priority: "medium",
		dueDate: "12/12/2024",
		createdAt: "12/12/2024",
		updatedAt: "12/12/2024",
	},
	{
		id: "3",
		name: "Task 3",
		status: "done",
		priority: "low",
		dueDate: "10/21/2024",
		createdAt: "10/21/2024",
		updatedAt: "10/21/2024",
	},
	{
		id: "4",
		name: "Task 4",
		status: "done",
		priority: "low",
		dueDate: "10/16/2024",
		createdAt: "10/16/2024",
		updatedAt: "10/16/2024",
	},
	{
		id: "5",
		name: "Task 5",
		status: "done",
		priority: "low",
		dueDate: "10/23/2024",
		createdAt: "10/23/2024",
		updatedAt: "10/23/2024",
	},
	{
		id: "6",
		name: "Task 6",
		status: "done",
		priority: "low",
		dueDate: "10/16/2024",
		createdAt: "10/16/2024",
		updatedAt: "10/16/2024",
	},
	{
		id: "7",
		name: "Task 7",
		status: "done",
		priority: "low",
		dueDate: "10/23/2024",
		createdAt: "10/23/2024",
		updatedAt: "10/23/2024",
	},
];

export const COLOR_ROWS = {
	empty: "",
	urgent: "bg-red-200",
	moderate: "bg-yellow-200",
	normal: "bg-green-200",
} as { [key: string]: string };
