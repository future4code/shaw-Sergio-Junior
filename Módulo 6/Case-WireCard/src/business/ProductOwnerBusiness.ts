import { ProductOwnerDatabase } from "../data/ProductOwnerDataBase"
import { CustomError } from "../error/CustomError"
import { IdGenerator } from "../services/IdGenerator"

export class ProductOwnerBusiness {
    constructor(
        private idGenerator = new IdGenerator,
        private productOwnerDB = new ProductOwnerDatabase
    ) { }
    insertProductOwner = async () => {
        try {
            const id: string = this.idGenerator.generate()

            const response: string = await this.productOwnerDB.insertProductOwner(id)

            return response
        } catch (error: any) {
            throw new CustomError(error.statusCode || 400, error.message)
        }
    }
}