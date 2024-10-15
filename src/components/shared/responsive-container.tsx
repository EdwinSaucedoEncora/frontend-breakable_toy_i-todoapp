import {
	ForwardRefExoticComponent,
	HTMLAttributes,
	RefAttributes,
} from "react";

/* Container to limit to overexpand beyond large screens */

type ResponsiveContainerProps = Partial<
	ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> &
		HTMLAttributes<HTMLDivElement>
>;
export default function ResponsiveContainer({
	className,
	children,
	...props
}: ResponsiveContainerProps) {
	return (
		<div className={`max-w-maximum-screens p-4 ${className}`} {...props}>
			{children}
		</div>
	);
}
