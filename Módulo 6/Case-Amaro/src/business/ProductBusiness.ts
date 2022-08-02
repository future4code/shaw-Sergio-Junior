import { ProductDatabase } from "../data/ProductData";
import { CustomError } from "../error/CustomError"
import { GetFilteredProducts, NewProductInputDTO, ProductModel } from "../model/ProductModel"
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private idGenerator = new IdGenerator,
        private authenticator = new Authenticator,
        private productDB = new ProductDatabase
    ) { }

    insert = async (product: NewProductInputDTO, token: string) => {
        const { productName, tags } = product

        try {
            if (!productName || !tags) {
                throw new CustomError(422, "Some field is missing.");
            }

            const tokenData: AuthenticationData = this.authenticator.getData(token)
            if (tokenData.role.toUpperCase() !== "ADMIN") {
                throw new CustomError(404, "Unauthorized. Only 'ADMIN' users can insert a product.");
            }

            const validToken: AuthenticationData = this.authenticator.getData(token)
            if (!validToken) {
                throw new CustomError(404, "Invalid token.")
            }

            const id: string = this.idGenerator.generate()

            const checkProductName = await this.productDB.getProductByName(productName)
            if (checkProductName) {
                throw new CustomError(422, "This product name already exists.");
            }

            const newProduct: ProductModel = new ProductModel(id, productName, tags)

            await this.productDB.insertProduct(newProduct)

            return newProduct
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getProductByName = async (productName: string, token: string) => {
        try {
            if (!productName) {
                throw new CustomError(422, "Field is missing.");
            }
            const validToken = this.authenticator.getData(token)
            if (!validToken) {
                throw new CustomError(404, "Invalid token.")
            }

            const response: GetFilteredProducts | boolean = await this.productDB.getProductByName(productName)
            if (!response) {
                throw new CustomError(422, "We couldnt find any product.");
            }
            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getProductById = async (productId: string, token: string) => {
        try {
            if (!productId) {
                throw new CustomError(422, "Field is missing.");
            }
            const validToken = this.authenticator.getData(token)
            if (!validToken) {
                throw new CustomError(404, "Invalid token.")
            }

            const response: boolean | GetFilteredProducts = await this.productDB.getProductById(productId)
            if (!response) {
                throw new CustomError(422, "We couldnt find any product.");
            }
            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }

    getProductByTag = async (productTag: string, token: string) => {
        try {
            if (!productTag) {
                throw new CustomError(422, "Field is missing.");
            }
            const validToken = this.authenticator.getData(token)
            if (!validToken) {
                throw new CustomError(404, "Invalid token.")
            }

            const response: GetFilteredProducts[] | boolean = await this.productDB.getProductByTag(productTag)
            if (!response) {
                throw new CustomError(422, "We couldnt find any product.");
            }

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}