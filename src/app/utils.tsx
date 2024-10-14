import { COLOR_ROWS } from "./constants";
export function capitalize(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}
export function getStatusDate(weeksLeft: number) {
	if (weeksLeft > 0) {
		if (weeksLeft === 1) {
			return COLOR_ROWS["urgent"];
		}
		if (weeksLeft === 2) {
			return COLOR_ROWS["moderate"];
		}
		return COLOR_ROWS["normal"];
	}
	return COLOR_ROWS["empty"];
}
