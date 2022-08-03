import { AthleteDatabase } from "../data/AthleteDatabase";
import { countries } from "../data/mocks/Countries";
import { CustomError } from "../error/CustomError";
import { AthleteDTO, AthleteModel } from "../model/AthleteModel";
import { IdGenerator } from "../services/IdGenerator";

export class AthleteBusiness {

    constructor(
        private idGenerator = new IdGenerator,
        private athleteDB = new AthleteDatabase
    ) { }

    insertAthlete = async (newAthlete: AthleteDTO): Promise<string> => {

        const { name, nickname, nationality } = newAthlete

        try {
            if (!name || !nickname || !nationality) {
                throw new CustomError(422, "All fields are mandatory.");
            }
            if (typeof name != "string" || typeof nickname != "string" || typeof nationality != "string") {
                throw new CustomError(422, "All fields must be type of string.");
            }

            const checkNationality = countries.find((country) => {
                return country.name.toUpperCase() === nationality.toUpperCase()
            })
            if (!checkNationality) {
                throw new CustomError(422, "Nationality must be a valid country.");
            }

            const getAthleteByNickName = await this.athleteDB.getAthleteByNickName(nickname)
            if (getAthleteByNickName) {
                throw new CustomError(422, "Choose another nickname.");
            }

            const id: string = this.idGenerator.generate()

            const athlete: AthleteModel = new AthleteModel(id, name, nickname, nationality)

            const response: string = await this.athleteDB.insertAthlete(athlete)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
    getAllAthletes = async (): Promise<AthleteModel[]> => {
        try {
            return await this.athleteDB.getAllAthletes()
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}

