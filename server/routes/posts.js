import express from "express";
import {
  createPost,
  getAllPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

/* CREACTE */
router.post("/createPost", auth, createPost);

/* READ */
router.get("/", getAllPosts);
router.get("/:userId/posts", getUserPosts);

/* UPDATE */
router.patch("/:id/likePost", auth, likePost);

export default router;
