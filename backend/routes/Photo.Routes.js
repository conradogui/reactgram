import express from "express";
const router = express.Router();

//controller
import {
  commentPhoto,
  deletePhoto,
  getAllPhotos,
  getPhotoById,
  getUserPhotos,
  insertPhoto,
  likePhoto,
  searchPhoto,
  updatePhoto,
} from "../controllers/PhotoController.js";

//middlewares
import {
  commentValidation,
  photoInsertValidation,
  photoUpdateValidation,
} from "../middlewares/photoValidation.js";
import authGuard from "../middlewares/authGuard.js";
import validate from "../middlewares/handleValidation.js";
import imageUpload from "../middlewares/imageUpload.js";

//routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhoto)
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put(
  "/comment/:id",
  authGuard,
  commentValidation(),
  validate,
  commentPhoto
);


export default router;
