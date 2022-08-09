import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {

    private static ATHLETES = "athletes"
    private static COMPETITION = "competition"
    private static RESULTS = "results"

    async createTables() {
        try {
            await this.getConnection().raw(`
            CREATE TABLE athletes (
                id VARCHAR(255) PRIMARY KEY, 
                name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) UNIQUE NOT NULL, 
                nationality VARCHAR(255) NOT NULL
                );
                
                CREATE TABLE competition (
                id VARCHAR(255) PRIMARY KEY,
                competition enum("100m", "Dardo") NOT NULL,
                status enum("active", "finished") DEFAULT "active"
                );
                
                CREATE TABLE results (
                id VARCHAR(255) PRIMARY KEY, 
                athlete VARCHAR(255) NOT NULL, 
                FOREIGN KEY (athlete) REFERENCES athletes(id),
                competition_id VARCHAR(255) NOT NULL, 
                FOREIGN KEY (competition_id) REFERENCES competition(id),
                value FLOAT NOT NULL, 
                unity enum("m", "s")
                );
                `)

            console.log(
                "Athletes:", Migrations.ATHLETES,
                "Competition:", Migrations.COMPETITION,
                "Results:", Migrations.RESULTS
            )

        } catch (error: any) {
            console.log(error.message)
        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}

new Migrations().createTables()