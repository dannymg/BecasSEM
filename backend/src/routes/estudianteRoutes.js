import { Router } from "express";
import {
  getEstudiantes,
  getEstudiante,
  createEstudiante,
  updateEstudiante,
  deleteEstudiante,
} from "../controllers/estudianteController.js";

const router = Router();

router.get("/estudiante", getEstudiantes);
router.get("/estudiante/:cedula", getEstudiante);
router.post("/estudiante", createEstudiante);
router.put("/estudiante/:cedula", updateEstudiante);
router.delete("/estudiante/:cedula", deleteEstudiante);

export default router;
