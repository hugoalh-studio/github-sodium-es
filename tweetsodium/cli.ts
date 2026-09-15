import process from "node:process";
import {
	parseArgs,
	styleText
} from "node:util";
import { GitHubSodiumSealer } from "../tweetsodium.ts";
if (!import.meta.main) {
	throw new Error(`This entrypoint is for command line only!`);
}
process.addListener("uncaughtException", (error: Error): void => {
	let message: string = error.message;
	if ((error.stack ?? "").length > 0) {
		message += `\n${error.stack}`;
	}
	console.error(`${styleText(["red"], "ERROR", { validateStream: false })}\t${message}`);
	process.exit(1);
});
const { positionals } = parseArgs({ allowPositionals: true });
if (positionals.length !== 2) {
	throw new Error(`Invalid arguments length! Expect: 2, Current: ${positionals.length}.`);
}
console.log(new GitHubSodiumSealer(positionals[0]).encrypt(positionals[1]));
