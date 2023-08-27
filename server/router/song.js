import express from "express";
import passport from "passport";
import { createSong, getAllSongs, getMySongs, getSingleSong, getSpecificArtistSongs } from "../controllers/songController.js";

const router = express.Router();

router.post("/create",passport.authenticate("jwt", { session: false }),createSong);
router.get("/get/allSongs",passport.authenticate("jwt", { session: false }),getAllSongs);
router.get("/get/mySongs",passport.authenticate("jwt", { session: false }),getMySongs);
router.get("/get/artist/:artistId",passport.authenticate("jwt", { session: false }),getSpecificArtistSongs);
router.get("/get/song/:songId",passport.authenticate("jwt", { session: false }),getSingleSong);

export default router;
