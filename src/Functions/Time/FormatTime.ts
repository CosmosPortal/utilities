/**
 * Formats a time in seconds to a valid time
 * @param {number} seconds - The time in seconds
 * @param {string} separator - The separator to join the values
 * @returns {string} The formatted time
 */
export function FormatTime(seconds: number, separator: string = ","): string {
	if (seconds === 0) return "0 Seconds";

	const times = [
		{ date: "Year", seconds: 31536000 },
		{ date: "Month", seconds: 2592000 },
		{ date: "Week", seconds: 604800 },
		{ date: "Day", seconds: 86400 },
		{ date: "Hour", seconds: 3600 },
		{ date: "Minute", seconds: 60 },
		{ date: "Second", seconds: 1 }
	];

	let data = [];

	for (const { date, seconds: date_second } of times) {
		if (seconds >= date_second) {
			const unitValue = Math.floor(seconds / date_second);
			data.push(`${unitValue} ${date}${unitValue !== 1 ? "s" : ""}`);
			seconds %= date_second;
		}
	}

	return data.join(separator);
}
