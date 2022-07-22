import { CustomError } from "../error/CustomError";
import { GetFilteredProducts, GetProduct, GetTags, ProductModel } from "../model/ProductModel";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {

    private PRODUCT_TABLE_NAME = "products_amaro";
    private TAG_TABLE_NAME = "product_tags";

    public async insertProduct(product: ProductModel) {
        try {
            const tags: string[] = product.getTags()

            await this.getConnection()
                .insert({
                    id: product.getId(),
                    product_name: product.getProductName()
                })
                .into(this.PRODUCT_TABLE_NAME)

            for (let tag of tags) {
                await this.getConnection()
                    .insert({
                        tags: tag,
                        product_id: product.getId()
                    })
                    .into(this.TAG_TABLE_NAME)
            }

        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.")
        }
    }

    public async getProductByName(productName: string) {
        try {
            const product: GetProduct[] = await this.getConnection()
                .select()
                .where({ product_name: productName })
                .from(this.PRODUCT_TABLE_NAME)

            if (!product.length) {
                return false
            }

            let tagsArr: string[] = []
            const tags: GetTags[] = await this.getConnection()
                .select()
                .from(this.TAG_TABLE_NAME)
                .where({ product_id: product[0].id })

            for (let tag of tags) {
                if (tag.product_id === product[0].id) {
                    tagsArr.push(tag.tags)
                }
            }

            return { id: product[0].id, product: product[0].product_name, tags: tagsArr }
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.");
        }
    }

    public async getProductById(productId: string) {
        try {
            const product: GetProduct[] = await this.getConnection()
                .select()
                .where({ id: productId })
                .from(this.PRODUCT_TABLE_NAME)

            if (!product.length) {
                return false
            }

            let tagsArr: string[] = []
            const tags: GetTags[] = await this.getConnection()
                .select()
                .from(this.TAG_TABLE_NAME)
                .where({ product_id: product[0].id })

            for (let tag of tags) {
                if (tag.product_id === product[0].id) {
                    tagsArr.push(tag.tags)
                }
            }

            return { id: product[0].id, product: product[0].product_name, tags: tagsArr }
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.");
        }
    }

    public async getProductByTag(productTag: string) {
        try {
            // pegar as infos das tags
            const tagsByName: GetTags[] = await this.getConnection()
                .select()
                .from(this.TAG_TABLE_NAME)
                .where({ tags: productTag })

            if (!tagsByName.length) {
                return false
            }
            // populando array de products ids
            const productsIds = []
            for (let tag of tagsByName) {
                productsIds.push(tag.product_id)
            }

            // declarando resultado a ser entregue
            let result: GetFilteredProducts[] = []

            // for para agrupar as tags e entregar o result 
            for (let id of productsIds) {
                const product: GetProduct[] = await this.getConnection()
                    .select()
                    .where({ id: id })
                    .from(this.PRODUCT_TABLE_NAME)

                // agrupando todas as tags(somente nome)
                let tagsNames: string[] = []

                // tags pelo product id igual
                const tags: GetTags[] = await this.getConnection()
                    .select()
                    .from(this.TAG_TABLE_NAME)
                    .where({ product_id: product[0].id })

                for (let tag of tags) {
                    if (tag.product_id === product[0].id) {
                        tagsNames.push(tag.tags)
                    }
                }
                result.push({ id: product[0].id, product: product[0].product_name, tags: tagsNames })
            }

            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage || "Internal error.");
        }
    }

}