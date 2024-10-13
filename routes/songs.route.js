import { Router } from "express";
import { getAllSongs } from "../controllers/songs.controller.js";

const songsRouter = Router();

songsRouter.get("/songs", getAllSongs);

export default songsRouter;
