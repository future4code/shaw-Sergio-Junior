import { AthleteModel } from "../../src/model/AthleteModel"
import { AthleteMock, AthleteMock2 } from "./AthleteMock"

export class AthleteDatabaseMock {

    insertAthlete = async (athlete: AthleteModel): Promise<string> => {

        switch (athlete.getId()) {
            case "id_mock":
                return "Athlete successfully created."
            default:
                return "Internal error."
        }

    }

    getAthleteByNickName = async (nickname: string): Promise<AthleteModel | undefined> => {

        switch (nickname) {
            case "nick_mock1":
                return AthleteMock
            default:
                return undefined
        }

    }

    getAllAthletes = async (): Promise<AthleteModel[]> => {

        return [AthleteMock, AthleteMock2]

    }

}