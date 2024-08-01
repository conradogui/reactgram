import express from "express";
//controller
import {register, login, getCurrentUser, update} from "../controllers/UserController.js";

const router = express.Router();

//middlewares
import validate from "../middlewares/handleValidation.js";
import {userCreateValidation, loginValidation, userUpdateValidation} from "../middlewares/userValidations.js";
import authGuard from "../middlewares/authGuard.js";
import imageUpload from "../middlewares/imageUpload.js";

//routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)

export default router;