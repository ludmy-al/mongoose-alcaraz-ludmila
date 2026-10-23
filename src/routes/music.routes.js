import { Router } from "express";
import {
  createMusic,
  getAllMusic,
} from "../controllers/music.controllers";

export const musicRouter = Router();


musicRouter.post("/users", createMusic);

musicRouter.get("/users", getAllMusic);
