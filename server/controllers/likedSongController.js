import { LikedSongDetails } from "../models/likedSongDetails.js";

export const addLikedSong = async (req, res) => {
  try {
    const { userId, songId } = req.body;
    const songExistInLikedSongListOrNot = await LikedSongDetails.findOne({
      song: songId,
    });

    // console.log(songExistInLikedSongListOrNot)

    if (songExistInLikedSongListOrNot) {
      return res.status(301).send({
        success: false,
        message: "Song already exists in liked list",
      });
    }
    const newLikedSongId = new LikedSongDetails({
      song: songId,
      owner: userId,
    });
    await newLikedSongId.save();
    return res.status(200).send({
      success: true,
      song: songId,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while adding the song",
      error: error,
    });
  }
};

export const getLikedSongsByUserId = async (req, res) => {
  try {
    const  {userId}  = req.params;

    // console.log(req.body)

    console.log("Hiiiiiiiiiiiiii"+userId)
    const likedSongsByUser = await LikedSongDetails.find({ owner: userId });
    if (likedSongsByUser.length === 0)
      return res.status(200).send({
        success: true,
        message: "No Liked songs",
      });
    else
      return res.status(200).send({
        success: true,
        songs: likedSongsByUser,
      });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching the liked songs",
      error: error,
    });
  }
};
