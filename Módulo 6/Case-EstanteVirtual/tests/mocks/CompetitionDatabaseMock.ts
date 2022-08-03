import { CompetitionModel, CompetitionStatusData, CompetitionStatusDTO, STATUS } from "../../src/model/CompetitionModel"
import { ResultModel, ResultsData } from "../../src/model/ResultModel"
import { CompetitionByIdMock, CompetitionByIdMock2, CompetitionMock, CompetitionMock2 } from "./CompetitionMock"
import { ResultDataMock1, ResultMock1 } from "./ResultsMock"

export class CompetitionDatabaseMock {



    insertCompetition = async (competitionModel: CompetitionModel): Promise<string> => {

        switch (competitionModel.getId()) {
            case "id_mock":
                return "Competition has been successfully created."
            default:
                return "Internal error."
        }

    }

    changeCompetitionStatus = async (newStatus: CompetitionStatusDTO, id: string): Promise<void> => { }

    getCompetitionById = async (id: string): Promise<CompetitionStatusData | undefined> => {

        switch (id) {
            case "id_mock3":
                return CompetitionByIdMock
            default:
                return undefined
        }

    }

    getAllCompetitions = async (): Promise<CompetitionModel[]> => {

        return [CompetitionMock, CompetitionMock2]

    }

    getFinishedCompetitions = async (status: string): Promise<CompetitionModel[] | undefined> => {

        switch (status) {
            case STATUS.FINISHED:
                return [CompetitionMock2]
            default:
                return undefined
        }

    }

    getActiveCompetitions = async (status: string): Promise<CompetitionModel[] | undefined> => {

        switch (status) {
            case STATUS.ACTIVE:
                return [CompetitionMock]
            default:
                return undefined
        }


    }

    getAllResultsById = async (athlete_id: string): Promise<ResultModel[] | undefined> => {

        switch (athlete_id) {
            case "id_mock3":
                return [ResultMock1]
            default:
                return undefined
        }

    }

    insertCompetitionResult = async (newResult: ResultModel): Promise<string> => {

        switch (newResult.getAthleteId()) {
            case "id_mock3":
                return "Result successfully registered."
            default:
                return "All fields required."
        }

    }

    getResultsRank = async (competition_id: string): Promise<ResultsData[] | string> => {

        switch (competition_id) {
            case "id_mock3":
                return [ResultDataMock1]
            default:
                return "Internal error."
        }

    }
}