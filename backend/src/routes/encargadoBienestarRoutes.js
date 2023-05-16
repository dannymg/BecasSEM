import { Router } from "express";
import {
  getEncargadosBienestar,
  getEncargadoBienestarPorID,
  createEncargadoBienestar,
  updateEncargadoBienestar,
  deleteEncargadoBienestar,
} from "../controllers/encargadoBienestarController.js";

const router = Router();

router.get("/encargado", getEncargadosBienestar);
router.get("/encargado/:numero_social", getEncargadoBienestarPorID);
router.post("/encargado", createEncargadoBienestar);
router.put("/encargado/:numero_social", updateEncargadoBienestar);
router.delete("/encargado/:numero_social", deleteEncargadoBienestar);

export default router;
