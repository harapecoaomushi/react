import express from "express";
import { getResult } from "../controllers/houi.controller.js";

export const houiRouter = express.Router();

houiRouter.get("/", (req, res) => getResult(req, res));