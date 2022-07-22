import { ProductModel } from "../../src/model/ProductModel";
import { productMockDois, productMockUm } from "./ProductMock";

export class ProductDatabaseMock {

    public async insertProduct(product: ProductModel): Promise<void> { }

    public async getProductByName(productName: string): Promise<ProductModel | undefined> {
        switch (productName) {
            case "moletom":
                return productMockUm
            case "Jeans":
                return productMockDois
            default:
                return undefined
        }
    }

    public async getProductById(productId: string): Promise<ProductModel | undefined> {
        switch (productId) {
            case "123":
                return productMockUm
            case "123456":
                return productMockDois
            default:
                return undefined
        }
    }

    public async getProductByTag(productTag: string): Promise<ProductModel | undefined> {
        switch (productTag) {
            case "Inverno":
                return productMockUm
            case "Outono":
                return productMockDois
            default:
                return undefined
        }
    }

}