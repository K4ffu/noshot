// Imports
import Enemy from "./classes/enemy.js";
import Player from "./classes/player.js";
import Dummy from "./enemies/dummy.js";
import input from "./input.js";
import chalk from "chalk";
import random from "./random.js";

// Creates a new player
const player = new Player();
const enemies: Enemy[] = [new Dummy()];

// Prints main menu
async function printMainMenu(): Promise<void> {
	// Clears screen
	console.clear();

	// Prints main menu
	console.log(chalk.bold("NoShot"));
	console.log("Press enter to start!");

	// Pauses for user input
	await input();

	// Create player data
	await createPlayer();

	// Start loop
	loop();
}
printMainMenu();

async function createPlayer(): Promise<void> {
	player.name = await input("My name is: ");
}

async function loop(): Promise<void> {
	// Clear screen
	console.clear();

	// Prints health and attack
	console.log(`${player.name} | ❤ ${player.health} | ⚔ ${player.damage}`);

	// Prints enemy health and attack
	console.log("---");
	for (const enemy of enemies) {
		console.log(`${enemy.name} | ❤ ${enemy.health} | ⚔ ${enemy.damage}`);
	}

	// Prints action bar
	console.log("---");
	console.log("[1] Normal Attack");
	console.log("[2] Special Attack");
	console.log("[3] Use Healing");
	console.log("[4] Defend");

	// Grabs user's action
	const action = parseInt(await input());

	// Performs user's action
	if (action == 1) {
		const target = enemies[random(0, enemies.length)];
		player.attack(target);
		console.log(`${player.name} attacked ${target.name}`);
	}

	// Performs enemy's action
	for (const enemy of enemies) {
		enemy.attack(player);
		console.log(`${enemy.name} attacked ${player.name}`);
	}

	// Next loop
	await input();
	loop();
}
