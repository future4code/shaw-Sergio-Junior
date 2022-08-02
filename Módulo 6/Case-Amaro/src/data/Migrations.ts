import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {

    private static USERS = "user_amaro"
    private static PRODUCTS = "products_amaro"
    private static TAGS = "product_tags"

    async createTables() {
        try {
            await this.getConnection().raw(`
                    CREATE TABLE ${Migrations.USERS} (
                    id VARCHAR(255) PRIMARY KEY,
                    user_name VARCHAR(255) NOT NULL, 
                    password VARCHAR(255) NOT NULL, 
                    email VARCHAR(255) UNIQUE NOT NULL,
                    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
                    );
                    
                    CREATE TABLE ${Migrations.PRODUCTS} (
                    id VARCHAR(255) PRIMARY KEY,
                    product_name VARCHAR(255) NOT NULL 
                    );
                    
                    CREATE TABLE ${Migrations.TAGS} (
                    id INT AUTO_INCREMENT PRIMARY KEY, 
                    tags VARCHAR(255), 
                    product_id VARCHAR(255),
                    FOREIGN KEY (product_id) REFERENCES products_amaro(id) 
                    );  
                `)
            console.log(`Tables ${Migrations.USERS}, ${Migrations.PRODUCTS} and ${Migrations.TAGS}`)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}

new Migrations().createTables()