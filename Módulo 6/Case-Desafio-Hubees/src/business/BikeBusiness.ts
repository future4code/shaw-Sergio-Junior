import { BikeData } from "../data/BikeData";
import { BikeModel } from "../model/BikeModel";
import { IdGenerator } from "../services/IdGenerator";
import { GetBike } from "../types/getBike";
import { InsertBikeDTO } from "../types/insertBikeDTO";
import { SoldBike } from "../types/soldBike";

export class BikeBusiness {

    constructor(
        private idGenerator = new IdGenerator,
        private bikeDB = new BikeData
    ) { }

    insertBike = async (bike: InsertBikeDTO) => {
        // checar infos recebidas 
        const { color, speeds, model, price, brand } = bike
        if (!color || !speeds || !model || !price || !brand) {
            throw new Error("Invalid fields.");
        }

        // checar os tipos 
        if (typeof speeds != "number" || typeof price != "number") {
            throw new Error("Fields 'speeds' and 'price' must be typeof number.");
        }

        // criaçao do id da bike 
        const bikeId: string = this.idGenerator.generateId()

        // montar objeto para solicitar sua criação no DB 
        const bikeToCreate = new BikeModel(bikeId, color, speeds, brand, model, price)

        // solicitar criação ao DB 
        await this.bikeDB.insertBike(bikeToCreate)

        return "This bike has been successfully added in the storage."
    }

    sellBike = async (id: string) => {

        // checar infos recebidas 
        const bikeId: string = id

        const checkBikeId: GetBike = await this.bikeDB.getBikeById(bikeId)
        if (!checkBikeId) {
            throw new Error("Invalid id.");
        }

        // criar bike a ser adicionada na tabela de sold_bikes 
        const bike: SoldBike = {
            bike_id: checkBikeId.id,
            brand: checkBikeId.brand,
            color: checkBikeId.color,
            speeds: checkBikeId.speeds,
            model: checkBikeId.model,
            price: checkBikeId.price,
        }

        // solicitar a "venda" da bike no banco 
        await this.bikeDB.sellBike(bikeId, bike)

        return "This bike has been sold and added to your sold_bikes table."
    }

    soldBikes = async () => {

        // solicitar bikes vendidas ao DB 
        const response: SoldBike[] = await this.bikeDB.soldBikes()
        if (!response.length) {
            throw new Error("We need to sell bikes, I couldnt find any sold bike.");
        }

        return response
    }

    alterBikePrice = async (id: string, bikeNewPrice: number) => {
        // checar infos recebidas 
        const bikeId: string = id

        const checkBikeId: GetBike = await this.bikeDB.getBikeById(bikeId)
        if (!checkBikeId) {
            throw new Error("Invalid id.");
        }

        if (!bikeNewPrice || typeof bikeNewPrice != "number") {
            throw new Error("Your body is either invalid or missing.");
        }

        // solicitar ao DB alteração do preço da bike
        const response: GetBike[] = await this.bikeDB.alterBikePrice(bikeId, bikeNewPrice)

        return response[0]
    }

    getAllBikes = async () => {
        // solicitar ao DB todos os produtos
        const response: GetBike[] = await this.bikeDB.getAllBikes()
        if (!response.length) {
            throw new Error("It's better to talk with our providers, we ran out of bikes.");
        }
        return response
    }

    getBikesByColor = async (color: string) => {

        // checar o parametro recebido         
        if (!color || typeof color != "string") {
            throw new Error("Invalid query.");
        }

        // solicitar ao DB bikes pela cor
        const response: GetBike[] = await this.bikeDB.getBikesByColor(color)
        if (!response.length) {
            throw new Error("Couldn't find any bike in this color.");
        }
        return response
    }

    getBikesByPrice = async (price: number) => {

        // checar o parametro recebido         
        if (!price || typeof price != "number") {
            throw new Error("Invalid query.");
        }

        // solicitar ao DB bikes pelo preço máximo
        const response: GetBike[] = await this.bikeDB.getBikesByPrice(price)
        if (!response.length) {
            throw new Error("Couldn't find any bike for this price or below.");
        }
        return response
    }

    getBikesPriceOrdered = async () => {
        // solicitar ao DB bikes ordenadas pelo preço
        const response: GetBike[] = await this.bikeDB.getBikesPriceOrdered()
        if (!response.length) {
            throw new Error("Couldn't find any bike.");
        }
        return response
    }

}