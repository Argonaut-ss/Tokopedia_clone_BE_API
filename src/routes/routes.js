import express from "express";
import swaggerRoute from "../config/swagger.js";
import apiRoutes from "./api/api-routes.js";

const router = express.Router();

//API Documentation routes
router.use("/docs", swaggerRoute);
//routes for diffrent API
router.use("/api", apiRoutes);

export default router;
