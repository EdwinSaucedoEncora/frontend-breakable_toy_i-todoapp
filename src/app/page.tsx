import AppSelect from "@/components/shared/app-select";
import ResponsiveContainer from "@/components/shared/responsive-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Constant Definitions
const STATUS_TASKS = ["All", "Done", "Undone"];
const STATUS_PLACEHOLDER = "All, Done, Undone";

const PRIORITY_TASKS = ["All", "High", "Medium", "Low"];
const PRIORITY_PLACEHOLDER = "All, High, Medium, Low";

export default function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 sm:items-start  font-[family-name:var(--font-geist-sans)]">
			{/* Using a responsive container for limiting to expand on large screens */}
			<ResponsiveContainer className="max-w-maximum-screens p-4 ">
				{/* Top container for search */}
				<div className="flex flex-wrap justify-between  w-full sm:[&_:is(input,button,div)]:w-full">
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
							options={PRIORITY_TASKS}
							placeholder={PRIORITY_PLACEHOLDER}
							className="w-full"
						/>
						<AppSelect
							name="statuses"
							label="Status"
							options={STATUS_TASKS}
							placeholder={STATUS_PLACEHOLDER}
							className="w-full"
						/>
					</div>
					<Button className="m-8 w-32 self-end">Search</Button>
				</div>
			</ResponsiveContainer>
		</main>
	);
}
