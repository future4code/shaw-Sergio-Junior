import express from "express";
import { AthleteController } from "../controller/atlheteController";

export const athleteRouter = express.Router();

const athleteController = new AthleteController();

athleteRouter.post("", athleteController.insertAthlete);
athleteRouter.get("", athleteController.getAllAthletes);
