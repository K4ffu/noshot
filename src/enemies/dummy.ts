// Imports
import Entity from "../entity.js";
import Enemy from "../classes/enemy.js";

// Creates dummy class
class Dummy extends Enemy {
	health = 15;
	damage = 1;
	id = "enemy_dummy";
	name = "Dummy";

	attack(entity: Entity): void {
		entity.health = entity.health - this.damage;
	}

	heal(healing: number): void {}
}

// Exports
export default Dummy;
