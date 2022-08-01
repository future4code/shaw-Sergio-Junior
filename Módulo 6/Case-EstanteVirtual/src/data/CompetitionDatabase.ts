import { CustomError } from "../error/CustomError";
import { CompetitionModel, CompetitionStatusData, CompetitionStatusDTO } from "../model/CompetitionModel";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {

    private TABLE_NAME = "competition";

    insertCompetition = async (competitionModel: CompetitionModel): Promise<string> => {
        try {
            await this.getConnection()
                .insert(competitionModel)
                .into(this.TABLE_NAME)

            return "Competition successfully created."
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    changeCompetitionStatus = async (newStatus: CompetitionStatusDTO, id: string): Promise<void> => {
        try {
            await this.getConnection()
                .update({ status: newStatus })
                .where({ id: id })
                .from(this.TABLE_NAME)
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getCompetitionById = async (id: string): Promise<CompetitionStatusData> => {
        try {
            const response: CompetitionStatusData[] = await this.getConnection()
                .select()
                .where({ id })
                .from(this.TABLE_NAME)

            return response[0]
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getAllCompetitions = async (): Promise<CompetitionModel[]> => {
        try {
            const response: CompetitionModel[] = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)

            return response
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getFinishedCompetitions = async (status: string): Promise<CompetitionModel[]> => {
        try {
            const response: CompetitionModel[] = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)
                .where({ status })

            return response
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getActiveCompetitions = async (status: string): Promise<CompetitionModel[]> => {
        try {
            const response: CompetitionModel[] = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)
                .where({ status })

            return response
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }


}