import { app } from "./app";
import { buyerRouter } from "./routes/buyerRouter";
import { paymentRouter } from "./routes/paymentRouter"
import { productOwnerRouter } from "./routes/productOwnerRouter";

app.use("/payment", paymentRouter)
app.use("/buyer", buyerRouter)
app.use("/productOwner", productOwnerRouter)