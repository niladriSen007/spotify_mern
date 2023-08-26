import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    likedSongs: {
      type: String,
      default: "",
    },
    likedPLaylists: {
      type: String,
      default: "",
    },
    subscribedArtists: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const UserDetails = mongoose.model("UserDetail", userSchema);
