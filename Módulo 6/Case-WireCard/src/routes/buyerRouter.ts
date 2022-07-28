import express from "express";
import { BuyerController } from "../controller/BuyerController";


export const buyerRouter = express.Router();

const buyerController = new BuyerController();

buyerRouter.post("/user", buyerController.insertBuyer);
buyerRouter.post("/card", buyerController.insertBuyerCard);