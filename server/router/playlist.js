import express from 'express'
import passport from 'passport'
import { addNewSongToPlaylist, createPlaylist, getPlaylistByUserId, getSpecificPlaylist, getUsersAllPlaylist, removeNewSongToPlaylist } from '../controllers/playlistController.js'


const router = express.Router()
router.post("/create",passport.authenticate("jwt",{session:false}),createPlaylist)
router.get("/get/:playlistId",passport.authenticate("jwt",{session:false}),getSpecificPlaylist)
router.get("/user/allPlaylist",passport.authenticate("jwt",{session:false}),getUsersAllPlaylist)
router.get("/userPlaylist/:userId",passport.authenticate("jwt",{session:false}),getPlaylistByUserId)
router.post("/add/song",passport.authenticate("jwt",{session:false}),addNewSongToPlaylist)
router.delete("/remove/song",passport.authenticate("jwt",{session:false}),removeNewSongToPlaylist)


export default router