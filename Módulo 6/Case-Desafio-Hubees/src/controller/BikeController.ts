import { Request, Response } from "express";
import { BikeBusiness } from "../business/BikeBusiness";
import { GetBike } from "../types/getBike";
import { InsertBikeDTO } from "../types/insertBikeDTO";

export class BikeController {

    constructor(
        private bikeBusiness = new BikeBusiness
    ) { }

    insertBike = async (req: Request, res: Response) => {
        // receber os dados pelo body 
        const { color, speeds, brand, model, price } = req.body

        // montar o objeto 
        const bike: InsertBikeDTO = {
            color,
            speeds,
            brand,
            model,
            price
        }

        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: string = await this.bikeBusiness.insertBike(bike)
            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    sellBike = async (req: Request, res: Response) => {
        // receber os dados pelo body 
        const bikeId: string = req.params.id as string
        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: string = await this.bikeBusiness.sellBike(bikeId)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    soldBikes = async (req: Request, res: Response) => {
        try {
            // solicitar ao business as checagens e resposta do DB 
            const response = await this.bikeBusiness.soldBikes()
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    alterBikePrice = async (req: Request, res: Response) => {
        try {

            // pegar o id da bike 
            const bikeId: string = req.params.id

            // pegar novo preço 
            const { bikeNewPrice } = req.body

            // solicitar ao business as checagens e resposta do DB 
            const response: GetBike = await this.bikeBusiness.alterBikePrice(bikeId, bikeNewPrice)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getAllBikes = async (req: Request, res: Response) => {
        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: GetBike[] = await this.bikeBusiness.getAllBikes()
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getBikesByColor = async (req: Request, res: Response) => {
        // pegar a cor de filtro 
        const color: string = req.query.color as string

        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: GetBike[] = await this.bikeBusiness.getBikesByColor(color)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getBikesByPrice = async (req: Request, res: Response) => {
        // pegar o valor para filtrar  
        const price: number = Number(req.query.price)

        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: GetBike[] = await this.bikeBusiness.getBikesByPrice(price)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getBikesPriceOrdered = async (req: Request, res: Response) => {
        try {
            // solicitar ao business as checagens e resposta do DB 
            const response: GetBike[] = await this.bikeBusiness.getBikesPriceOrdered()
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}