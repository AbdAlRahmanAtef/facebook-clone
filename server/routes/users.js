import express from "express";
import { addRemoveFriend, getFriends, getUser } from "../controllers/users.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", auth, getUser);
router.get("/:id/friends", auth, getFriends);

router.patch("/:id/:friendId", auth, addRemoveFriend);

export default router;
