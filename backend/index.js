import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
