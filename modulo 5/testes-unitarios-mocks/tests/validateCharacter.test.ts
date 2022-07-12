import { Character, validateCharacter } from "../src/validateCharacter"
import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe("Validando os campos dos personagens.", () => {

    test("Deve retornar falso para nome vazio.", () => {
        const personagemUm: Character = {
            nome: "",
            vida: 1500,
            defesa: 35,
            força: 150
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(false)
    })

    test("Deve retornar falso para força = 0.", () => {
        const personagemUm: Character = {
            nome: "Ryo",
            vida: 1500,
            defesa: 35,
            força: 0
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(false)
    })

    test("Deve retornar falso para vida = 0.", () => {
        const personagemUm: Character = {
            nome: "Ryo",
            vida: 0,
            defesa: 35,
            força: 150
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(false)
    })

    test("Deve retornar falso para defesa = 0.", () => {
        const personagemUm: Character = {
            nome: "Ryo",
            vida: 1500,
            defesa: 0,
            força: 150
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(false)
    })

    test("Deve retornar true para defesa negativa.", () => {
        const personagemUm: Character = {
            nome: "Ryo",
            vida: 1500,
            defesa: -100,
            força: 150
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(false)
    })

    test("Deve retornar true para personagem válido.", () => {
        const personagemUm: Character = {
            nome: "Ryo",
            vida: 1500,
            defesa: 100,
            força: 150
        }

        const result = validateCharacter(personagemUm)
        expect(result).toBe(true)
    })

})