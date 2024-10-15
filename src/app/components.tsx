import AppSelect from "@/components/shared/app-select";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { PRIORITY_TASKS } from "./constants";
import { Task } from "./tasks-columns";
import { ReactNode } from "react";

interface TaskModalProps {
	taskData?: Task;
	children?: ReactNode;
	title?: string;
	description?: string;
}

export function TaskModal({
	title,
	description,
	taskData,
	children,
}: TaskModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{children ?? (
					<Button variant="outline" className="m-8 w-32">
						+ New To Do
					</Button>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{title ?? "Add a new to do task"}</DialogTitle>
					<DialogDescription>
						{description ?? "Make a new task for your future assignments."}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4 py-4 [&_label]:text-sm [&_label]:min-w-[6rem] [&_label]:max-w-[6rem] [&_label]:text-right [&_input]:w-full [&_div]:gap-4 sm:[&_div]:flex-col sm:[&_label]:text-left ">
					<div className="flex w-full">
						<label htmlFor="name">Name</label>
						<Input
							id="name"
							placeholder="Task Name"
							defaultValue={taskData?.name}
						/>
					</div>
					<AppSelect
						name="priorities"
						label="Priority"
						options={PRIORITY_TASKS}
						placeholder={PRIORITY_TASKS.join(",")}
						className="w-full"
						defaultValue={taskData?.priority}
					/>
					<div className="w-full flex">
						<label htmlFor="due-date" className="text-left">
							Due Date
						</label>
						<Input
							id="due-date"
							defaultValue={
								new Date(
									taskData?.dueDate as string | Date
								).toLocaleDateString() ?? new Date().toLocaleDateString()
							}
							type="date"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
