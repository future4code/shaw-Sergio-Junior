import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {

    private static PRODUCT_OWNER = "product_owner"
    private static BUYER = "buyer"
    private static CARD = "card"
    private static PAYMENT = "payment"
    private static PAYMENT_STATUS = "payment_status"

    async createTables() {
        try {
            await this.getConnection().raw(`
            CREATE TABLE ${Migrations.PRODUCT_OWNER} (
                id VARCHAR(255) PRIMARY KEY NOT NULL
                );
                
                CREATE TABLE ${Migrations.BUYER} (
                id VARCHAR(255) PRIMARY KEY NOT NULL,
                name VARCHAR(255) NOT NULL, 
                email VARCHAR(255) NOT NULL UNIQUE, 
                CPF VARCHAR(255) NOT NULL UNIQUE
                );
                
                CREATE TABLE ${Migrations.CARD} (
                id VARCHAR(255) PRIMARY KEY NOT NULL, 
                card_holder_name VARCHAR(255) NOT NULL, 
                card_number VARCHAR(255) UNIQUE NOT NULL, 
                card_exp_date DATE NOT NULL, 
                card_cvv INT NOT NULL 
                );
                
                CREATE TABLE ${Migrations.PAYMENT} (
                id VARCHAR(255) PRIMARY KEY NOT NULL, 
                product_owner_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (product_owner_id) REFERENCES product_owner(id), 
                buyer_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (buyer_id) REFERENCES buyer(id), 
                amount FLOAT NOT NULL, 
                payment_method enum("CREDIT CARD", "BOLETO") NOT NULL
                );
                
                CREATE TABLE ${Migrations.PAYMENT_STATUS} (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                payment_id VARCHAR(255) NOT NULL,
                payment_status enum("PAID", "NOT PAID")
                );
                `)

            console.log(
                "Product Owner:", Migrations.PRODUCT_OWNER,
                "Buyer:", Migrations.BUYER,
                "Card:", Migrations.CARD,
                "Payment:", Migrations.PAYMENT,
                "Payment Status:", Migrations.PAYMENT_STATUS
            )

        } catch (error: any) {
            console.log(error.message)
        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}

new Migrations().createTables()