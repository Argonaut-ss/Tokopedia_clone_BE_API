import express from "express";
import videoRouter from "./video-api-routes.js";
import productRouter from "./product-api-routes.js";
import commentRouter from "./comment-api-routes.js";

const apiRoutes = express.Router();

apiRoutes.use("/videos", videoRouter);
apiRoutes.use("/products", productRouter);
apiRoutes.use("/comments", commentRouter);


export default apiRoutes;
