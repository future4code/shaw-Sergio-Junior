import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class ProductOwnerDatabase extends BaseDatabase {

    private TABLE_NAME = "product_owner";

    insertProductOwner = async (id: string): Promise<string> => {
        try {
            await this.getConnection()
                .insert({ id })
                .into(this.TABLE_NAME)

            return "New productOwner created successfully."
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

}