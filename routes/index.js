import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import songsRouter from "./songs.route.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const basePath = "/api/v1";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Music Player Backend" });
});

app.use(`${basePath}`, songsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
