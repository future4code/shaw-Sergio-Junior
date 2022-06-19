import { connection } from "../services/connection";

export const selectProducts = async(): Promise <any> => {
    
    const products = await connection("labecommerce_products")
        .select("labecommerce_products.id","labecommerce_products.name","labecommerce_products.price",
        "labecommerce_products.image_url")

        return products
}

export const getProductById = async(productId: string): Promise <any> => {

    const product = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product[0]
}

export const getProductByName = async(name: string): Promise <string> => {

    const [nameProduct] = await connection("labecommerce_products")
        .where({name: name})

        return nameProduct
}