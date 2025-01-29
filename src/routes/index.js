import { Router } from "express";
import { router as postRouter } from "./post.routes.js";
import { router as getRouter } from "./get.routes.js";

const router = Router();

router.use("/obtener", postRouter);
router.use("/subir", getRouter);

export { router };
