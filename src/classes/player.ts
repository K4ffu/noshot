// Imports
import Entity from "./entity.js";

// Creates player class
class Player extends Entity {
	health = 100;
	damage = 10;
	id = "player";
	name = "default";

	attack(entity: Entity): void {
		entity.health = entity.health - this.damage;
	}

	heal(healing: number): void {}
}

// Exports
export default Player;
