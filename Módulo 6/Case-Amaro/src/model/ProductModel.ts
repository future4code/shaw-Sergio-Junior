export class ProductModel {

    constructor(
        private id: string,
        private productName: string,
        private tags: string[]
    ) { }

    public getId() {
        return this.id
    }
    public getProductName() {
        return this.productName
    }
    public getTags() {
        return this.tags
    }
}

export interface NewProductInputDTO {
    productName: string,
    tags: string[]
}

export interface GetFilteredProducts {
    id: string,
    product: string,
    tags: string[]
}

export interface GetProduct {
    id: string,
    product_name: string
}

export interface GetTags {
    id: string,
    tags: string,
    product_id: string
}




