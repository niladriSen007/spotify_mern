import mongoose from "mongoose";

const likedSongSchema = new mongoose.Schema(
  {
   
    song: 
      {
        type: mongoose.Types.ObjectId,
        ref: "SongDetail",
      },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "UserDetail",
    }
    
  },
  { timestamps: true }
);

export const LikedSongDetails = mongoose.model("LikedSongDetail", likedSongSchema);
