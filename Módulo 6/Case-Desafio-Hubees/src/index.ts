import { app } from "./controller/app";
import { BikeController } from "./controller/BikeController";

const bikeController = new BikeController()

app.post("/insert/bike", bikeController.insertBike) // CADASTRAR BIKE 
app.delete("/sell/bike/:id", bikeController.sellBike) // VENDER BIKE 
app.get("/sold/bikes", bikeController.soldBikes) // PEGAR BIKES VENDIDAS 
app.put("/price/bike/:id", bikeController.alterBikePrice) // ALTERAR PREÇO DE UMA BIKE 
app.get("/bikes", bikeController.getAllBikes) // PEGAR TODAS AS BIKES
app.get("/bikes/bycolor", bikeController.getBikesByColor) // PEGAR BIKES POR COR
app.get("/bikes/byprice", bikeController.getBikesByPrice) // PEGAR BIKES POR PREÇO
app.get("/bikes/priceordered", bikeController.getBikesPriceOrdered) // PEGAR BIKES ORDENADAS PELO PREÇO