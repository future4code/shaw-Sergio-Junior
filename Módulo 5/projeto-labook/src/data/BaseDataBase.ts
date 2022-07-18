import Knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    private static connection = Knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })
    protected getConnection() {
        return BaseDataBase.connection
    }
}