import "dotenv/config";

import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { responses } from "./helper/response.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
//const mongostring = process.env.DATABASE_URL;

mongoose.connect("mongodb+srv://samysyafta:samy6505@sam-cluster.w8hathp.mongodb.net/tokopedia_play_clone?retryWrites=true&w=majority");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Database is not Connected");
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

import routes from "./routes/routes.js";
const app = express();
import cors from "cors";

app.use(cors());
app.use(responses);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(routes);
app.use(errorMiddleware);

app.listen(process.env.port, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
