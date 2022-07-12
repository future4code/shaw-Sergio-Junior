import { performAttack } from "../src/performAttack"

describe("Testando com dado mockado.", () => {

    test("Aprendendo mock. True", () => {
        try {
            // personagem atacando
            const personageAttacker = {
                nome: "Ryo",
                vida: 1500,
                defesa: 35,
                força: 250
            }

            // personagem defendendo 
            const personageDefender = {
                nome: "Anna",
                vida: 1500,
                defesa: 50,
                força: 100
            }

            // criando o mock 
            const validatorMock = jest.fn(() => {
                {
                    return true
                }
            })

            // chamada da função 
            performAttack(personageAttacker, personageDefender, validatorMock)
            expect(personageDefender.vida).toEqual(1300);
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
        } catch (error) {
            expect(error.message).toContain("Personagem inválido.")
        } finally {
            expect.assertions(4)
        }
    })

    test("Aprendendo mock. False", () => {

        // personagem atacando
        const personageAttacker = {
            nome: "Ryo",
            vida: 1500,
            defesa: 35,
            força: 0
        }

        // personagem defendendo 
        const personageDefender = {
            nome: "Anna",
            vida: 1500,
            defesa: 50,
            força: 100
        }

        // criando o mock 
        const validatorMock = jest.fn(() => {
            {
                return false
            }
        })

        try {
            // chamada da função 
            performAttack(personageAttacker, personageDefender, validatorMock)
            // expectations
        } catch (error) {

            expect(error.message).toContain("Personagem inválido.")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)

        } finally {

            expect.assertions(4)

        }
    })

})