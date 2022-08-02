import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { COMPETITION, CompetitionDTO, CompetitionModel, CompetitionStatusData, CompetitionStatusDTO, STATUS } from "../model/CompetitionModel";
import { CompetitionResultDTO, ResultModel, ResultsData, UNITY } from "../model/ResultModel";
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {

    constructor(
        private idGenerator = new IdGenerator,
        private competitionDB = new CompetitionDatabase
    ) { }

    insertCompetition = async (newCompetition: CompetitionDTO): Promise<string> => {
        const { competition, status } = newCompetition
        try {
            if (!competition) {
                throw new CustomError(422, "Competition field is missing.");
            }
            if (competition.toUpperCase() !== COMPETITION.DARDO.toUpperCase() &&
                competition.toUpperCase() !== COMPETITION.HUNDRED_METERS.toUpperCase()) {
                throw new CustomError(422, "Competition has to be '100m' or 'Dardo'.");
            }
            if ((status && status.toUpperCase() !== STATUS.ACTIVE.toUpperCase()) &&
                (status && status.toUpperCase() !== STATUS.FINISHED.toUpperCase())) {
                throw new CustomError(422, "Status has to be 'Active' or 'Finished'.");
            }

            const id: string = this.idGenerator.generate()

            const competitionModel: CompetitionModel = new CompetitionModel(id, competition, status)

            const response: string = await this.competitionDB.insertCompetition(competitionModel)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    changeCompetitionStatus = async (newStatus: CompetitionStatusDTO): Promise<CompetitionStatusData> => {
        const { id, status } = newStatus
        try {
            const checkId: CompetitionStatusData = await this.competitionDB.getCompetitionById(id)
            if (!checkId) {
                throw new CustomError(422, "Invalid id.");
            }
            if (!status) {
                throw new CustomError(422, "Status field is missing.");
            }
            if ((status && status.toUpperCase() !== STATUS.ACTIVE.toUpperCase()) &&
                (status && status.toUpperCase() !== STATUS.FINISHED.toUpperCase())) {
                throw new CustomError(422, "Status has to be 'Active' or 'Finished'.");
            }

            await this.competitionDB.changeCompetitionStatus(newStatus, id)

            const response: CompetitionStatusData = {
                id, competition: checkId.competition, status
            }

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getAllCompetitions = async (): Promise<CompetitionModel[]> => {
        try {
            const response: CompetitionModel[] = await this.competitionDB.getAllCompetitions()

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getFinishedCompetitions = async (status: string): Promise<CompetitionModel[]> => {
        try {

            if (!status) {
                throw new CustomError(422, "Status field is missing.");
            }
            if ((status && status.toUpperCase() !== STATUS.ACTIVE.toUpperCase()) &&
                (status && status.toUpperCase() !== STATUS.FINISHED.toUpperCase())) {
                throw new CustomError(422, "Status has to be 'Active' or 'Finished'.");
            }

            const response: CompetitionModel[] = await this.competitionDB.getFinishedCompetitions(status)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getActiveCompetitions = async (status: string): Promise<CompetitionModel[]> => {

        try {
            if (!status) {
                throw new CustomError(422, "Status field is missing.");
            }
            if ((status && status.toUpperCase() !== STATUS.ACTIVE.toUpperCase()) &&
                (status && status.toUpperCase() !== STATUS.FINISHED.toUpperCase())) {
                throw new CustomError(422, "Status has to be 'Active' or 'Finished'.");
            }

            const response: CompetitionModel[] = await this.competitionDB.getActiveCompetitions(status)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    insertCompetitionResult = async (newCompetitionResult: CompetitionResultDTO): Promise<string> => {

        const { athlete_id, competition_id, value, unity } = newCompetitionResult

        try {
            if (!athlete_id || !competition_id || !value || !unity) {
                throw new CustomError(422, "All fields required.");
            }
            if (typeof athlete_id !== "string" || typeof competition_id !== "string") {
                throw new CustomError(422, "Athlete and competition ID must be a string.");
            }
            if (typeof value !== "number") {
                throw new CustomError(422, "Value must be a number.");
            }
            if (unity.toLowerCase() !== UNITY.METER &&
                unity.toLowerCase() !== UNITY.SECONDS) {
                throw new CustomError(422, "Unity can only be 's' for seconds or 'm' for meters.");
            }

            const id: string = this.idGenerator.generate()

            const newResult: ResultModel = new ResultModel(id, athlete_id, competition_id, value, unity)

            const checkCompetition: CompetitionStatusData = await this.competitionDB.getCompetitionById(competition_id)
            if (checkCompetition.status.toUpperCase() === STATUS.FINISHED.toUpperCase()) {
                throw new CustomError(422, "This competition is closed.");
            }
            if (checkCompetition.competition.toUpperCase() === COMPETITION.DARDO.toUpperCase() &&
                unity.toUpperCase() !== UNITY.METER.toUpperCase()) {
                throw new CustomError(422, "Competition 'DARDO' unity need to be type of 'm' - meters.");
            }
            if (checkCompetition.competition.toUpperCase() === COMPETITION.HUNDRED_METERS.toUpperCase() &&
                unity.toUpperCase() !== UNITY.SECONDS.toUpperCase()) {
                throw new CustomError(422, "Competition '100M' unity need to be type of 's' - seconds.");
            }
            if (checkCompetition.competition.toUpperCase() === COMPETITION.DARDO.toUpperCase()) {
                const checkAthleteAttempts: ResultModel[] = await this.competitionDB.getAllResultsById(athlete_id)
                if (checkAthleteAttempts.length >= 3) {
                    throw new CustomError(422, "This athlete does not have any attempt left.");
                }
            }
            if (checkCompetition.competition.toUpperCase() === COMPETITION.HUNDRED_METERS.toUpperCase()) {
                const checkAthleteAttempts: ResultModel[] = await this.competitionDB.getAllResultsById(athlete_id)
                if (checkAthleteAttempts.length >= 1) {
                    throw new CustomError(422, "This athlete does not have any attempt left.");
                }
            }

            const response: string = await this.competitionDB.insertCompetitionResult(newResult)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getResultsRank = async (competition_id: string): Promise<ResultsData[]> => {
        try {
            const checkCompetition = await this.competitionDB.getCompetitionById(competition_id)
            if (!checkCompetition) {
                throw new CustomError(422, "Invalid competition id.");
            }

            const results: ResultsData[] = await this.competitionDB.getResultsRank(competition_id)
            if (!results.length) {
                throw new CustomError(422, "Couldn't find any results yet.");
            }

            const response: ResultsData[] = []

            if (checkCompetition.competition.toUpperCase() === COMPETITION.DARDO.toUpperCase()) {
                for (let result of results) {
                    results.filter((competitor) => {
                        if (result.value > competitor.value && result.athlete_id === competitor.athlete_id) {
                            if (!response.find((athlete) => athlete.athlete_id === competitor.athlete_id)) {
                                response.push(result)
                            }
                        }
                    })
                }
            }

            let orderedResponse: ResultsData[] = []

            if (checkCompetition.competition.toUpperCase() === COMPETITION.DARDO.toUpperCase()) {
                orderedResponse = response.sort(function (a, b) {
                    return b.value - a.value
                })
            } else {
                orderedResponse = results.sort(function (a, b) {
                    return a.value - b.value
                })
            }

            return orderedResponse
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}