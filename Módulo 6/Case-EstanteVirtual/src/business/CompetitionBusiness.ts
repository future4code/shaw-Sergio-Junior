import { CompetitionDatabase } from "../data/CompetitionDatabase";
import { CustomError } from "../error/CustomError";
import { COMPETITION, CompetitionDTO, CompetitionModel, CompetitionStatusData, CompetitionStatusDTO, STATUS } from "../model/CompetitionModel";
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
    // getAllCompetitions = async (newCompetition: CompetitionDTO): Promise<string> => {
    //     try {
    //         const response: string = await this.competitionDB.insertCompetition(competitionModel)

    //         return response
    //     } catch (error: any) {
    //         throw new CustomError(error.statusCode || 400, error.message)
    //     }
    // }
}