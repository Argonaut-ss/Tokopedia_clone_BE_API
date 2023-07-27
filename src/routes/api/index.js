import express from "express";
import routerVideo from "./video.js";
import routerProduct from "./product.js";

const apiRoutes = express.Router();

apiRoutes.use("/videos", routerVideo);
apiRoutes.use("/product", routerProduct);


export default apiRoutes;
