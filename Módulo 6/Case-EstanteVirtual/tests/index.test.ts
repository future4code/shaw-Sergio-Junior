import { AthleteBusiness } from "../src/business/AthleteBusiness"
import { CompetitionBusiness } from "../src/business/CompetitionBusiness"
import { STATUS } from "../src/model/CompetitionModel"
import { AthleteDatabaseMock } from "./mocks/AthleteDatabaseMock"
import { AthleteFailureDTO, AthleteMock, AthleteMock2, AthleteSuccessDTO } from "./mocks/AthleteMock"
import { CompetitionDatabaseMock } from "./mocks/CompetitionDatabaseMock"
import { CompetitionFailureDTO, CompetitionMock, CompetitionMock2, CompetitionStatusFailureDTO, CompetitionStatusSuccessDTO, CompetitionSuccessDTO } from "./mocks/CompetitionMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { CompetitionResultFailureMockDTO, CompetitionResultMockDTO, ResultDataMock1 } from "./mocks/ResultsMock"

const athleteBusinessMock = new AthleteBusiness(
    new IdGeneratorMock,
    new AthleteDatabaseMock as any
)

const competitionBusinessMock = new CompetitionBusiness(
    new IdGeneratorMock,
    new CompetitionDatabaseMock as any
)

describe("ATHLETE TABLE TESTS", () => {
    expect.assertions(1)
    test("INSERT ATHLETE, SUCCESS", async () => {
        try {
            const result = await athleteBusinessMock.insertAthlete(AthleteSuccessDTO)
            expect(result).toBe("Athlete successfully created.")
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("INSERT ATHLETE FAILURE", async () => {
        expect.assertions(1)
        try {
            await athleteBusinessMock.insertAthlete(AthleteFailureDTO)
        } catch (error: any) {
            expect(error.message).toBe("Nationality must be a valid country.")
        }
    })

    test("GET ALL ATHLETES, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await athleteBusinessMock.getAllAthletes()
            expect(result).toStrictEqual([AthleteMock, AthleteMock2])
        } catch (error: any) {
            console.log(error.message)
        }
    })
})

describe("COMPETITION TABLE TESTS", () => {

    test("INSERT COMPETITION, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.insertCompetition(CompetitionSuccessDTO)
            expect(result).toBe("Competition has been successfully created.")
        } catch (error: any) {
            console.log(error)
        }
    })

    test("INSERT COMPETITION, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.insertCompetition(CompetitionFailureDTO)
        } catch (error: any) {
            expect(error.message).toBe("Status has to be 'Active' or 'Finished'.")
        }
    })

    test("CHANGE STATUS, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.changeCompetitionStatus(CompetitionStatusSuccessDTO)
            expect(result).toBeDefined()
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("CHANGE STATUS, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.changeCompetitionStatus(CompetitionStatusFailureDTO)
        } catch (error: any) {
            expect(error.message).toBe("Status field is missing.")
        }
    })

    test("GET ALL COMPETITIONS, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.getAllCompetitions()
            expect(result).toStrictEqual([CompetitionMock, CompetitionMock2])
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("GET FINISHED COMPETITIONS, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.getFinishedCompetitions(STATUS.FINISHED)
            expect(result).toStrictEqual([CompetitionMock2])
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("GET FINISHED COMPETITIONS, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.getFinishedCompetitions("finish")
        } catch (error: any) {
            expect(error.message).toBe("Status has to be 'Active' or 'Finished'.")
        }
    })

    test("GET ACTIVE COMPETITIONS, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.getActiveCompetitions(STATUS.ACTIVE)
            expect(result).toStrictEqual([CompetitionMock])
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("GET ACTIVE COMPETITIONS, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.getActiveCompetitions("ativada")
        } catch (error: any) {
            expect(error.message).toBe("Status has to be 'Active' or 'Finished'.")
        }
    })

})

describe("RESULTS TABLE TESTS", () => {

    test("INSERT RESULTS, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.insertCompetitionResult(CompetitionResultMockDTO)
            expect(result).toBe("Result successfully registered.")
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("INSERT RESULTS, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.insertCompetitionResult(CompetitionResultFailureMockDTO)
        } catch (error: any) {
            expect(error.message).toBe("All fields required.")
        }
    })

    test("GET RESULTS RANK, SUCCESS", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.getResultsRank("id_mock3")
            expect(result).toStrictEqual([ResultDataMock1])
        } catch (error: any) {
            console.log(error.message)
        }
    })

    test("GET RESULTS RANK, FAILURE", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.getResultsRank("")
        } catch (error: any) {
            expect(error.message).toBe("Invalid competition id.")
        }
    })
})


