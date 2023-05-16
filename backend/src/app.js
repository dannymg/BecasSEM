import "dotenv/config";
import express from "express";
import becaRoutes from "./routes/becaRoutes.js";
import encargadoBienestarRoutes from "./routes/encargadoBienestarRoutes.js";
import estudianteRoutes from "./routes/estudianteRoutes.js";
import fichaSocioeconomicaRoutes from "./routes/fichaSocioeconomicaRoutes.js";
import requisitoRoutes from "./routes/requisitoRoutes.js";
import solicitudBecaRoutes from "./routes/solicitudBecaRoutes.js";
import cors from "cors";

const app = express();

//Middleware
app.use(express.json());

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(becaRoutes);
app.use(encargadoBienestarRoutes);
app.use(estudianteRoutes);
app.use(fichaSocioeconomicaRoutes);
app.use(requisitoRoutes);
app.use(solicitudBecaRoutes);

export default app;
