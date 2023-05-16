import { Router } from "express";
import {
  getBecas,
  getBecaPorID,
  createBeca,
  updateBeca,
  deleteBeca,
} from "../controllers/becaController.js";

const router = Router();

router.get("/beca", getBecas);
router.get("/beca/:id", getBecaPorID);
router.post("/beca", createBeca);
router.put("/beca/:id", updateBeca);
router.delete("/beca/:id", deleteBeca);

export default router;
