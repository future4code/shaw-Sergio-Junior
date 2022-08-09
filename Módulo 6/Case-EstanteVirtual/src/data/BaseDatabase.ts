import Knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export abstract class BaseDatabase {
    private static connection = Knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_SCHEMA,
            multipleStatements: true
        },
    });

    protected getConnection() {
        return BaseDatabase.connection
    }

    public static async destroyConnection(): Promise<void> {
        if (BaseDatabase.connection) {
            await BaseDatabase.connection.destroy()
        }
    }
}

