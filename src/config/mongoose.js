import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL;

const mongooseConnection = () => {
  mongoose.connect(databaseUrl);

  mongoose.connection.on("error", (error) => {
    console.log(error);
  });

  mongoose.connection.once("connected", () => {
    console.log("Database Connected");
  });
};

export default mongooseConnection;
