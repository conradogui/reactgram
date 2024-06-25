import express from "express";
//controller
import {register, login, getCurrentUser} from "../controllers/UserController.js";

const router = express.Router();

//middlewares
import validate from "../middlewares/handleValidation.js";
import {userCreateValidation, loginValidation} from "../middlewares/userValidations.js";
import authGuard from "../middlewares/authGuard.js";

//routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser)

export default router;