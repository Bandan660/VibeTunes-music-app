import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
import authRouter from "./routes/auth.route.js";
import songsRouter from "./routes/songs.route.js";
import albumRouter from "./routes/album.route.js";
import statsRouter from "./routes/stats.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songsRouter);
app.use("/api/album", albumRouter);
app.use("/api/stats", statsRouter);

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
