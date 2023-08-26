import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "userDetails",
    },

},{timestamps:true})

export const SongDetails = mongoose.model("SongDetail",songSchema)