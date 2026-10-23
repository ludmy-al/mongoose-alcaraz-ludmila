import "dotenv/config"
import expresss from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { startDB } from "./src/config/database.js";

const app = expresss();

const PORT = process.env.PORT / / 3005;

app.listen(PORT, async () => {
    (await startDB(), console.log(`Servidor corriendo en ${PORT}`));
})
