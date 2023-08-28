import { PlaylistDetails } from "../models/playlistDetails.js";
import { SongDetails } from "../models/songDetails.js";

export const createPlaylist = async (req, res) => {
  try {
    const currentUser = req.user;

    const { name, thumbnail, songs } = req.body;

    if (!name || !thumbnail || !songs) {
      return res.send({
        error: "Please provide all required fields.",
        missingFields: {
          name: !name,
          thumbnail: !thumbnail,
          songs: !songs,
        },
      });
    }

    const newPlayList = new PlaylistDetails({
      name,
      thumbnail,
      songs,
      owner: currentUser?._id,
      collaborators: [],
    });

    await newPlayList.save();

    res.status(200).send({
      success: true,
      playlist: newPlayList,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};

export const getSpecificPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;

    const playlistExistOrNot = await PlaylistDetails.findById(playlistId);

    if (!playlistExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Playlist does not exist",
      });
    }

    res.status(200).send({
      success: true,
      playlist: playlistExistOrNot,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching the playlist",
      error: error,
    });
  }
};

export const getUsersAllPlaylist = async (req, res) => {
  try {
    const currentUser = req.user;

    console.log(currentUser);

    const playlistExistOrNot = await PlaylistDetails.find({
      owner: currentUser?._id,
    });

    if (!playlistExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Playlist does not exist",
      });
    }

    res.status(200).send({
      success: true,
      playlist: playlistExistOrNot,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching the playlist",
      error: error,
    });
  }
};

export const addNewSongToPlaylist = async (req, res) => {
  try {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;

    if (!playlistId || !songId) {
      return res.send({
        error: "Please provide all required fields.",
        missingFields: {
          playlistId: !playlistId,
          songId: !songId,
        },
      });
    }

    const playListExistOrNot = await PlaylistDetails.findById(playlistId);

    // console.log(playListExistOrNot?.owner.equals(currentUser?._id))
    // console.log(currentUser?._id)

    if (!playListExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Playlist does not exist",
      });
    }
    const songExistOrNot = await SongDetails.findById(songId);
    if (!songExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Song does not exist",
      });
    }

    const songExistInPlaylistOrNot = playListExistOrNot?.songs.includes(songId);
    console.log(songExistInPlaylistOrNot);

    if (
      playListExistOrNot?.owner.equals(currentUser?._id) &&
      songExistInPlaylistOrNot === false
    ) {
      // console.log("Helloo");
      playListExistOrNot?.songs?.push(songId);
      await playListExistOrNot.save();
      res.status(200).send({
        success: true,
        playlist: playListExistOrNot,
        message: "Song has been added to the playlist",
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "You don't have the power to add",
        error: error,
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Song already exist in the playlist",
      error: error,
    });
  }
};

export const removeNewSongToPlaylist = async (req, res) => {
  try {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;

    if (!playlistId || !songId) {
      return res.send({
        error: "Please provide all required fields.",
        missingFields: {
          playlistId: !playlistId,
          songId: !songId,
        },
      });
    }

    const playListExistOrNot = await PlaylistDetails.findById(playlistId);

    // console.log(playListExistOrNot?.owner.equals(currentUser?._id))
    // console.log(currentUser?._id)

    if (!playListExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Playlist does not exist",
      });
    }
    const songExistOrNot = await SongDetails.findById(songId);
    if (!songExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Song does not exist",
      });
    }

    const songExistInPlaylistOrNot = playListExistOrNot?.songs.includes(songId);
    console.log(songExistInPlaylistOrNot);

    if (
      playListExistOrNot?.owner.equals(currentUser?._id) &&
      songExistInPlaylistOrNot === true
    ) {
      // console.log("Helloo");
      playListExistOrNot?.songs?.pop(songId);
      await playListExistOrNot.save();
      res.status(200).send({
        success: true,
        playlist: playListExistOrNot,
        message: "Song has been deleted from playlist",
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "You don't have the power to remove",
        error: error,
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Song does not exist in the playlist",
      error: error,
    });
  }
};

export const getPlaylistByUserId = async (req, res) => {
  try {
    const {userId} = req.params;
    console.log(userId)
    if (!userId)
      return res.send({
        error: "Please provide all required fields.",
        missingFields: {
          userId: !userId,
        },
      });

      const playlistDetails = await PlaylistDetails.find({owner:userId})
      if (!playlistDetails) {
        return res.status(301).send({
          success: false,
          message: "No Playlist exists",
        });
      }
      res.status(200).send({
        success: true,
        playlist: playlistDetails,
        message: "Here is your playlist ",
      });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Song does not exist in the playlist",
      error: error,
    });
  }
};
