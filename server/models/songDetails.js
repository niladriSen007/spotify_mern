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
    favourate: {
      type: Boolean,
    },
    track: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Types.ObjectId,
      ref: "UserDetail",
    },
  },
  { timestamps: true }
);

export const SongDetails = mongoose.model("SongDetail", songSchema);
