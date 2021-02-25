import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const UserController = new UserController();

router.post("/users", UserController.create);
