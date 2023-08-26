import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
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
      ref: "userDetails",
    },
    songs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "songDetails",
      },
    ],
    collaborators: [
      {
        type: mongoose.Types.ObjectId,
        ref: "userDetails",
      },
    ],
  },
  { timestamps: true }
);

export const SongDetails = mongoose.model("SongDetail", songSchema);
