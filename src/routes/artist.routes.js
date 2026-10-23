import { Router } from "express";
import {
  createArtist,
  getAllArtist,
} from "../controllers/artist.controllers.js";

export const artistRouter = Router();


artistRouter.post("/users", createArtist);

artistRouter.get("/users", getAllArtist);
