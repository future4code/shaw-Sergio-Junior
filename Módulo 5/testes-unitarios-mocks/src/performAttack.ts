import { Character, validateCharacter } from "./validateCharacter";
import { validateEmptyProperties, ValidateEmptyPropertiesError, ValidateEmptyPropertiesOutput } from "./validateEmptyProperties";

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    // if (!validateCharacter(attacker, validateEmptyProperties) || !validateCharacter(defender, validateEmptyProperties)) {
    //     throw new Error("Personagem inválido.");
    // }
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Personagem inválido.");
    }

    if (attacker.força > defender.defesa) {
        return defender.vida -= (attacker.força - defender.defesa)
    }

}