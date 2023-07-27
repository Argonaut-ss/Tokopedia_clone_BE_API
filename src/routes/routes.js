import express from "express";
import swaggerRoute from "../config/swagger.js";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/docs", swaggerRoute);
router.use("/api", apiRoutes);

export default router;
