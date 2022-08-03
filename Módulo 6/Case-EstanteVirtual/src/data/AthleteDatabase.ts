import { CustomError } from "../error/CustomError";
import { AthleteModel } from "../model/AthleteModel";
import { BaseDatabase } from "./BaseDatabase";

export class AthleteDatabase extends BaseDatabase {

    private TABLE_NAME = "athletes";

    insertAthlete = async (athlete: AthleteModel): Promise<string> => {
        try {
            await this.getConnection()
                .insert(athlete)
                .into(this.TABLE_NAME)

            return "Athlete successfully created."

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getAthleteByNickName = async (nickname: string): Promise<AthleteModel> => {
        try {
            const result: AthleteModel[] = await this.getConnection()
                .select()
                .where({ nickname })
                .from(this.TABLE_NAME)

            return result[0]

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    getAllAthletes = async (): Promise<AthleteModel[]> => {
        try {
            const result: AthleteModel[] = await this.getConnection()
                .select()
                .from(this.TABLE_NAME)

            return result

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

}