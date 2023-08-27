// Creates random function
function random(start: number, end: number): number {
	return Math.floor(Math.random() * (end - start)) + start;
}

// Exports
export default random;
