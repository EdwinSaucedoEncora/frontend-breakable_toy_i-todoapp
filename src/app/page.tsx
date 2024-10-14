"use client";
import AppSelect from "@/components/shared/app-select";
import ResponsiveContainer from "@/components/shared/responsive-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TaskModal } from "./components";
import {
	PRIORITY_PLACEHOLDER,
	PRIORITY_TASKS,
	STATUS_PLACEHOLDER,
	STATUS_TASKS,
	TASKS_SAMPLE,
} from "./constants";
import { taskColumns } from "./tasks-columns";
import { TasksDataTable } from "./tasks-data-table";

export default function Home() {
	// const table:{
	// 	columns,
	// 	data,
	// }: DataTableProps<TData, TValue>
	const table = useReactTable({
		data: TASKS_SAMPLE,
		columns: taskColumns,
		meta: {
			a: 1,
		},
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<main className="flex flex-col gap-8 row-start-2 sm:items-start  font-[family-name:var(--font-geist-sans)]">
			{/* Using a responsive container for limiting to expand on large screens */}
			<ResponsiveContainer className="max-w-maximum-screens p-4  space-y-4 *:px-8">
				{/* Top container for search */}
				<div className="flex flex-wrap justify-between  w-full sm:[&_:is(input,button,div)]:w-full border py-8 rounded-lg ">
					<div className="min-w-full flex place-items-center sm:flex-col sm:place-items-start sm:gap-2">
						<label htmlFor="name" className="max-w-[4rem] min-w-[4rem] px-2">
							Name
						</label>
						<Input
							name="name"
							placeholder="Task Name"
							className="ml-4 sm:ml-0"
						/>
					</div>
					<div className="*:flex *:gap-4 *:place-items-center flex flex-col gap-4 py-4 max-w-[32rem] w-1/2 sm:min-w-full">
						<AppSelect
							name="priorities"
							label="Priority"
							options={["All", ...PRIORITY_TASKS]}
							placeholder={PRIORITY_PLACEHOLDER}
							className="w-full"
						/>
						<AppSelect
							name="statuses"
							label="Status"
							options={["All", ...STATUS_TASKS]}
							placeholder={STATUS_PLACEHOLDER}
							className="w-full"
						/>
					</div>
					<Button className="m-8 w-32 self-end">Search</Button>
				</div>
				{/* Tasks table list section */}
				<div className="h-[50dvh] ">
					{/* Content Table */}
					<div className="h-[90%] ">
						<TaskModal />
						<TasksDataTable table={table} />
					</div>
					<Pagination className="h-[10%]">
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</ResponsiveContainer>
		</main>
	);
}
