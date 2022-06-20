import express from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())
type Product = { id: string, name: string, price: number }

// EX #1 ENDPOINT DE TEST  '/test'  
app.get('/test', (req, res) => {
    res.send("Api is working")
})

// EX #2 CRIAÇAO DO DATA.TS 
//------------------------// 

// EX #3 ENDPOINT PARA CRIAR PRODUTO E RETORNA LISTA ATUALIZADA
app.post('/createProduct', (req, res) => {
    const token = req.headers.auth
    const { id, price, name }: Product = req.body

    try {
        if (!token) {
            throw new Error("auth is missing");
        }
        if (!name || !price) {
            throw new Error("something is missing in your body variable");
        }
        if (typeof name !== 'string') {
            throw new Error("Name must be type string")
        }
        if (typeof price !== 'number') {
            throw new Error("Price must be type number")
        }
        if (price <= 0) {
            throw new Error("Price must bigger than zero")
        }

        products.find(product => {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                throw new Error("Product is already in your array");
            }
        })

        const newProduct: Product[] = [...products, { ...{ name, price }, id: Date.now().toString() }]
        res.status(201).send(newProduct)

    } catch (err: any) {
        switch (err.message) {
            case "auth is missing":
                res.status(401)
                break
            case "something is missing in your body variable":
                res.status(404)
                break
            case "Name must be type string":
                res.status(422)
                break
            case "Price must be type number":
                res.status(422)
                break
            case "Price must bigger than zero":
                res.status(422)
                break
            case "Product is already in your array":
                res.status(409)
                break
            default:
                res.status(500)
                break
        }
        res.send(err.message)
        //switch case
    }
})

// EX #4 ENDPOINT PARA RETORNAR TODOS OS PRODUTOS
app.get('/products', (req, res) => {
    const token = req.headers.auth
    try {
        if (!token) {
            throw new Error("auth is missing");
        }
        return res.status(200).send(products)

    } catch (err: any) {
        res.status(400).send(err.message)
        //switch case
    }
})

// EX #5 ENDPOITN PUT PRICE E RETORNA ATUALIZADO 
app.put('/product/:id', (req, res) => {
    const token = req.headers.auth
    const body = req.body
    const productId = req.params.id
    try {
        if (!token) {
            throw new Error("auth is missing");
        }
        if (!body.price) {
            throw new Error("something is missing in your body variable");
        }
        if (typeof body.price !== "number") {
            throw new Error("Price must be type number");
        }
        if (body.price <= 0) {
            throw new Error("Price must value more than 0");
        }

        const findProducts = products.filter((product) => {
            return product.id === productId
        })

        if (!findProducts.length) {
            throw new Error("Product ID is not correct");
        }

        const edditedProducts: Product[] = products.filter((product) => {
            if (product.id === productId) {
                return product.price = body.price
            }
        })

        res.status(201).send(edditedProducts)

    } catch (err: any) {
        switch (err.message) {
            case "auth is missing":
                res.status(401)
                break
            case "something is missing in your body variable":
                res.status(404)
                break
            case "Price must be type number":
                res.status(422)
                break
            case "Price must value more than 0":
                res.status(422)
                break
            case "Product ID is not correct":
                res.status(422)
                break
            default:
                res.status(500)
                break
        }
        res.send(err.message)
    }
})

// EX #6 DELETE UM PRODUTO  PELO ID
app.delete('/product/:id', (req, res) => {
    const token = req.headers.auth
    const productId: string = req.params.id
    try {
        if (!token) {
            throw new Error("auth is missing");
        }

        const findProduct = products.filter((product) => {
            return product.id === productId
        })
        if (!findProduct.length) {
            throw new Error("Product ID is not correct");

        }
        const deleteProductId: Product[] = products.filter((product) => {
            if (product.id !== productId) {
                return product
            }
        })

        res.status(200).send(deleteProductId)

    } catch (err: any) {
        switch (err.message) {
            case "auth is missing":
                res.status(401)
                break
            case "Product ID is not correct":
                res.status(422)
                break
            default:
                res.status(500)
                break
        }
        res.send(err.message)
    }
})

// EX #7
// EX #8
// EX #9  

app.listen(3003, () => {
    console.log("Server is runnig in port 3003")
})