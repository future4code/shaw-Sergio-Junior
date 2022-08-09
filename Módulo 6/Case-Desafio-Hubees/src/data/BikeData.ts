import { BikeModel } from "../model/BikeModel";
import { GetBike } from "../types/getBike";
import { SoldBike } from "../types/soldBike";
import { BaseDataBase } from "./BaseDataBase";

export class BikeData extends BaseDataBase {

    protected BIKE_STORAGE_TABLE_NAME = "bike_storage"
    protected SOLD_BIKES_TABLE_NAME = "sold_bikes"

    insertBike = async (bike: BikeModel) => {
        try {

            await this.getConnection()
                .insert(bike)
                .into(this.BIKE_STORAGE_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    sellBike = async (id: string, bike: SoldBike) => {
        try {
            await this.getConnection()
                .delete()
                .from(this.BIKE_STORAGE_TABLE_NAME)
                .where({ id })
            await this.getConnection()
                .insert(bike)
                .into(this.SOLD_BIKES_TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    soldBikes = async () => {
        try {

            const response: SoldBike[] = await this.getConnection()
                .select()
                .from(this.SOLD_BIKES_TABLE_NAME)

            return response
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getBikeById = async (id: string) => {
        try {

            const response: GetBike[] = await this.getConnection()
                .select()
                .where({ id })
                .from(this.BIKE_STORAGE_TABLE_NAME)

            return response[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    alterBikePrice = async (id: string, price: number) => {
        try {
            await this.getConnection()
                .update({ price })
                .where({ id })
                .from(this.BIKE_STORAGE_TABLE_NAME)

            const response: GetBike[] = await this.getConnection()
                .select()
                .where({ id })
                .from(this.BIKE_STORAGE_TABLE_NAME)
            return response

        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getAllBikes = async () => {
        try {
            const response: GetBike[] = await this.getConnection()
                .select()
                .from(this.BIKE_STORAGE_TABLE_NAME)

            return response
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getBikesByColor = async (color: string) => {
        try {
            const response: GetBike[] = await this.getConnection()
                .select()
                .from(this.BIKE_STORAGE_TABLE_NAME)
                .where({ color })

            return response
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getBikesByPrice = async (price: number) => {
        try {
            // pegar todas as bikes
            const bikes: GetBike[] = await this.getConnection()
                .select()
                .from(this.BIKE_STORAGE_TABLE_NAME)

            // array para popular com bikes até o valor desejado
            const filteredPriceBikes: GetBike[] = []
            for (let bike of bikes) {
                if (bike.price <= price) {
                    filteredPriceBikes.push(bike)
                }
            }

            return filteredPriceBikes
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }

    getBikesPriceOrdered = async () => {
        try {

            const bikes: GetBike[] = await this.getConnection()
                .select()
                .from(this.BIKE_STORAGE_TABLE_NAME)
                .orderBy("price", "asc")

            return bikes
        } catch (error: any) {
            throw new Error(error.sqlmessage || "Internal error.");
        }
    }
}
