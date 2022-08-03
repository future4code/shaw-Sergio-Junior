import { Request, Response } from "express";
import { AthleteBusiness } from "../business/AthleteBusiness";
import { AthleteDTO, AthleteModel } from "../model/AthleteModel";

export class AthleteController {

    constructor(
        private athleteBusiness = new AthleteBusiness
    ) { }

    insertAthlete = async (req: Request, res: Response): Promise<void> => {
        const { name, nickname, nationality } = req.body

        const newAthlete: AthleteDTO = {
            name, nickname, nationality
        }

        try {
            const response: string = await this.athleteBusiness.insertAthlete(newAthlete)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getAllAthletes = async (req: Request, res: Response): Promise<void> => {
        try {
            const response: AthleteModel[] = await this.athleteBusiness.getAllAthletes()
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

}