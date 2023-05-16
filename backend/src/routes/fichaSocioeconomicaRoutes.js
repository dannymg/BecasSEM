import { Router } from "express";
import {
  getAllFichaSocieconomicas,
  getEstudianteFichaSocieconomica,
  createFichaSocieconomica,
  updateFichaSocieconomica,
  deleteFichaSocieconomica,
} from "../controllers/fichaSocioeconomicaController.js";

const router = Router();

router.get("/ficha", getAllFichaSocieconomicas);
router.get("/ficha/:estudiante_cedula", getEstudianteFichaSocieconomica);
router.post("/ficha", createFichaSocieconomica);
router.put("/ficha/:estudiante_cedula", updateFichaSocieconomica);
router.delete("/ficha/:estudiante_cedula", deleteFichaSocieconomica);

export default router;
