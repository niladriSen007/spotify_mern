import express from 'express'
import passport from 'passport'
import { addLikedSong, getLikedSongsByUserId } from '../controllers/likedSongController.js'


const router = express.Router()
router.post("/song",passport.authenticate("jwt",{session:false}),addLikedSong)
router.get("/likedSongs/:userId",passport.authenticate("jwt",{session:false}),getLikedSongsByUserId)


export default router