import "dotenv/config"
import expresss from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { artistRouter } from "./src/routes/artist.routes.js";
import { musicRouter } from "./src/routes/music.routes.js";

const app = expresss();

const PORT = process.env.PORT || 3005;

//middlewares
app.use(express.json());
app.use(cookieParser); 
app.use(cors()); 

// rutas
app.use("/api", userRouter);
app.use("/api", artistRouter);
app.use("/api", musicRouter);

app.listen(PORT, async () => {
    (await startDB(), console.log(`Servidor corriendo en ${PORT}`));
})
