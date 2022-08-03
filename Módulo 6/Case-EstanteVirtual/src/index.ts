import { app } from "./app";
import { athleteRouter } from "./routes/athleteRouter";
import { competitionRouter } from "./routes/competitionRouter";

app.use("/athlete", athleteRouter)
app.use("/competition", competitionRouter)