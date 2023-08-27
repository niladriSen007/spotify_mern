import express from "express";
import passport from "passport";
import { createSong, getAllSongs, getMySongs } from "../controllers/songController.js";

const router = express.Router();

router.post("/create",passport.authenticate("jwt", { session: false }),createSong);
router.get("/get/allSongs",passport.authenticate("jwt", { session: false }),getAllSongs);
router.get("/get/mySongs",passport.authenticate("jwt", { session: false }),getMySongs);

export default router;
