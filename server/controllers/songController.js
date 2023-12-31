import { SongDetails } from "../models/songDetails.js";
import { UserDetails } from "../models/userDetails.js";

export const createSong = async (req, res) => {
  const { name, thumbnail, track } = req.body;
  const artist = req.user?._id;

  // console.log(artist)

  if (!name || !thumbnail || !track) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: !name,
        thumbnail: !thumbnail,
        track: !track,
      },
    });
  }

  try {
    const newSong = new SongDetails({
      name,
      thumbnail,
      track,
      artist,
    });

    await newSong.save();

    res.status(200).send({
      success: true,
      song: newSong,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while creating a song",
      error: error,
    });
  }
};


export const getFavouratedSongs = async (req, res) => {
  try {
    const songs = await SongDetails.find({favourate:true});
    res.status(200).send({
      success: true,
      song: songs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching favourate songs",
      error: error,
    });
  }
};



export const getMySongs = async (req, res) => {
  try {
    const songs = await SongDetails.find({artist:req.user?._id});
    res.status(200).send({
      success: true,
      song: songs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching your songs",
      error: error,
    });
  }
};





export const getAllSongs = async (req, res) => {
  try {
    const songs = await SongDetails.find();
    res.status(200).send({
      success: true,
      song: songs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching songs",
      error: error,
    });
  }
};


export const getSpecificArtistSongs = async(req,res) =>{
  try {
    const {artistId} = req.params;
    const artistExistOrNot = await UserDetails.findById(artistId)

    // console.log(artistExistOrNot)

    if (!artistExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Artist does not exist"
      })
    }

    const songs = await SongDetails.find({artist:artistId})
    res.status(200).send({
      success: true,
      songs:songs,
    })
  
    
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching songs",
      error: error,
    });
  }
}







export const getSingleSong = async(req,res) =>{
  try {
    const {songId} = req.params;
    const songExistOrNot = await SongDetails.findById(songId)

    console.log(songExistOrNot)

    if (!songExistOrNot) {
      return res.status(301).send({
        success: false,
        message: "Song does not exist"
      })
    }

    res.status(200).send({
      success: true,
      song:songExistOrNot
    })
  
    
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while fetching song",
      error: error,
    });
  }
}





