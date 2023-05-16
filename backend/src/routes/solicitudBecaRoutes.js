import { Router } from "express";
import {
  getSolicitudBecas,
  getSolicitudBeca,
  createSolicitudBeca,
  updateSolicitudBeca,
  deleteSolicitudBeca,
} from "../controllers/solicitudBecaController.js";

const router = Router();

router.get("/solicitud", getSolicitudBecas);
router.get("/solicitud/:numero", getSolicitudBeca);
router.post("/solicitud", createSolicitudBeca);
router.put("/solicitud/:numero", updateSolicitudBeca);
router.delete("/solicitud/:numero", deleteSolicitudBeca);

export default router;
