import { Router } from "express";
import {
  getRequisitos,
  getRequisito,
  createRequisito,
  updateRequisito,
  deleteRequisito,
} from "../controllers/requisitoController.js";

const router = Router();

router.get("/requisito", getRequisitos);
router.get("/requisito/:id", getRequisito);
router.post("/requisito", createRequisito);
router.put("/requisito/:id", updateRequisito);
router.delete("/requisito/:id", deleteRequisito);

export default router;
