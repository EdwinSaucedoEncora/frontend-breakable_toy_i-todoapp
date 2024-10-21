// Custom Select to avoid repeating code

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectTriggerProps } from "@radix-ui/react-select";

interface AppSelectProps extends SelectTriggerProps {
	options: Array<string>;
	placeholder: string;
	className?: string;
	name?: string;
	label?: string;
}

export default function AppSelect({
	className,
	options,
	placeholder,
	name,
	label,
	defaultValue,
	...props
}: AppSelectProps) {
	return (
		<div className="sm:gap-2 sm:flex-col flex sm:place-items-start sm:min-w-full">
			{label && (
				<label htmlFor={name} className="max-w-[4rem] min-w-[4rem] px-2">
					{label}
				</label>
			)}
			<Select name={name} defaultValue={String(defaultValue)}>
				<SelectTrigger
					className={`w-[180px] sm:min-w-full ${className}`}
					{...props}
				>
					<SelectValue placeholder={placeholder} />
					{/* All, High, Medium, Low */}
				</SelectTrigger>
				<SelectContent>
					{options.map((value) => (
						<SelectItem key={value} value={value.toLowerCase()}>
							{value}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
