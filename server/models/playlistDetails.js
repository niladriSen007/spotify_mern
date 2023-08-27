import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "UserDetail",
    },
    songs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SongDetail",
      },
    ],
    collaborators: [
      {
        type: mongoose.Types.ObjectId,
        ref: "UserDetail",
      },
    ],
  },
  { timestamps: true }
);

export const PlaylistDetails = mongoose.model("PlaylistDetail", playlistSchema);
