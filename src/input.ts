// Imports
import nodeReadline from "node:readline";

// Creates cli
const cli = nodeReadline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Creates input function
function input(query: string = "> "): Promise<string> {
	return new Promise((resolve) => {
		cli.question(query, (answer) => {
			resolve(answer);
		});
	});
}

// Exports
export default input;
