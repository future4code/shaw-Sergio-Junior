import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO, CompetitionModel, CompetitionStatusData, CompetitionStatusDTO } from "../model/CompetitionModel";
import { CompetitionResultDTO } from "../model/ResultModel";

export class CompetitionController {

    constructor(
        private competitionBusiness = new CompetitionBusiness
    ) { }

    insertCompetition = async (req: Request, res: Response): Promise<void> => {

        const { competition, status } = req.body
        const newCompetition: CompetitionDTO = { competition, status }

        try {
            const response: string = await this.competitionBusiness.insertCompetition(newCompetition)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    changeCompetitionStatus = async (req: Request, res: Response): Promise<void> => {

        const { id, status } = req.body
        const changeStatus: CompetitionStatusDTO = { id, status }

        try {
            const response: CompetitionStatusData = await this.competitionBusiness.changeCompetitionStatus(changeStatus)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getAllCompetitions = async (req: Request, res: Response): Promise<void> => {
        try {
            const response: CompetitionModel[] = await this.competitionBusiness.getAllCompetitions()
            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getFinishedCompetitions = async (req: Request, res: Response): Promise<void> => {

        const status = req.query.status as string

        try {
            const response = await this.competitionBusiness.getFinishedCompetitions(status)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getActiveCompetitions = async (req: Request, res: Response): Promise<void> => {

        const status = req.query.status as string

        try {
            const response = await this.competitionBusiness.getActiveCompetitions(status)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    insertCompetitionResult = async (req: Request, res: Response): Promise<void> => {

        const { athlete_id, competition_id, value, unity } = req.body
        const newCompetitionResult: CompetitionResultDTO = { athlete_id, competition_id, value, unity }

        try {
            const response = await this.competitionBusiness.insertCompetitionResult(newCompetitionResult)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    getResultsRank = async (req: Request, res: Response): Promise<void> => {

        const competition_id: string = req.params.competition_id

        try {
            const response = await this.competitionBusiness.getResultsRank(competition_id)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }
}