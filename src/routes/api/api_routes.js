import express from "express";
import videoRouter from "./video_api_routes.js";
import productRouter from "./product_api_routes.js";
import commentRouter from "./comment_api_routes.js";

const apiRoutes = express.Router();

apiRoutes.use("/videos", videoRouter);
apiRoutes.use("/products", productRouter);
apiRoutes.use("/comments", commentRouter);


export default apiRoutes;
