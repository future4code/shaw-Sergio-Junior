import { ValidateEmptyPropertiesOutput } from "./validateEmptyProperties";

export interface Character {
    nome: string,
    vida: number,
    defesa: number,
    força: number
}

export const validateCharacter = (
    character: Character
) => {
    if (character.vida <= 0) {
        return false;
    }

    if (character.defesa <= 0) {
        return false;
    }

    if (character.força <= 0) {
        return false;
    }

    if (!character.nome) {
        return false;
    }

    if (character.vida === undefined || character.defesa === undefined || character.força === undefined) {
        return false
    }

    return true
}