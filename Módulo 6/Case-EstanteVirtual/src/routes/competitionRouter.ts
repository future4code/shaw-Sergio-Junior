import express from "express";
import { CompetitionController } from "../controller/CompetitionController";

export const competitionRouter = express.Router();

const competitionController = new CompetitionController();

competitionRouter.post("", competitionController.insertCompetition);
competitionRouter.put("", competitionController.changeCompetitionStatus);
competitionRouter.post("/result", competitionController.insertCompetitionResult);
competitionRouter.get("/result/:competition_id", competitionController.getResultsRank);
competitionRouter.get("/allCompetitions", competitionController.getAllCompetitions);
competitionRouter.get("/activeCompetitions", competitionController.getActiveCompetitions); // query
competitionRouter.get("/finishedCompetitions", competitionController.getFinishedCompetitions); // query


