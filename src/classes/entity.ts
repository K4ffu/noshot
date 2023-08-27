// Creates entity class
abstract class Entity {
	abstract health: number;
	abstract damage: number;
	abstract id: string;
	abstract name: string;
	abstract attack(entity: Entity): void;
	abstract heal(healing: number): void;
}

// Exports
export default Entity;
