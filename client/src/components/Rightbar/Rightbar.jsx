import React, { useEffect, useState } from "react";
import SongLists from "../songContainer/SongLists";
import { AiFillPlayCircle } from "react-icons/ai";
import { Howl, Howler } from "howler";
import {
  BsFillArrowLeftCircleFill,
  BsPauseCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideUpload } from "../../store/slices/uploadSongSlice";
import CloudinaryUpload from "../CloudinaryUpload";
import { userRequest } from "../../requestMethods";
import { postSong } from "../../helperFunctions/postSong";
import { setSongUrlNew } from "../../store/slices/songSlice";

const Rightbar = () => {
  // console.log(window.cloudinary)
  const [songData, setSongData] = useState({
    name: "",
    thumbnail: "",
  });
  const [songUrl, setSongUrl] = useState();
  const [playListUrl, setPlayListUrl] = useState(true);
  const [uploadedSongFileName, setUploadedSongFileName] = useState();

  const [songDetails, setSongDetails] = useState({
    name: "",
    thumbnail: "",
    track: "",
  });

  const [selectedSong, setSelectedSong] = useState();

  const selector = useSelector((state) => state?.upload);
  const song = useSelector((state) => state?.song);
  const activeSongUrl = useSelector((state) => state?.song?.songUrl);
  console.log(song?.songId);

  const fetchSingleSong = async () => {
    const { data } = await userRequest.get(`/song/get/song/${song?.songId}`);
    console.log(data?.song);
    setSelectedSong(data?.song);
    dispatch(setSongUrlNew(data?.song?.track));
  };

  useEffect(() => {
    fetchSingleSong();
  }, [song?.songId]);

  const dispatch = useDispatch();

  const hideUploadComp = () => {
    dispatch(hideUpload());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value)
    setSongData((prevSongData) => ({
      ...prevSongData,
      [name]: value,
    }));
  };

  const handleSubmitSong = (e) => {
    e.preventDefault();
    setSongDetails((prevSongDetails) => ({
      ...prevSongDetails,
      ...songData,
      track: songUrl,
    }));
    setUploadedSongFileName("");
    setSongData({});
    dispatch(setSongUrlNew(songUrl));
    setSongUrl("");
    // console.log(songDetails)

    dispatch(hideUpload());
  };

  // console.log(songDetails)

  useEffect(() => {
    postSong(songDetails);
  }, [songDetails]);
  // console.log(uploadedSongFileName)

  const [playSong, setPlaySong] = useState();
  const [showPlaySong, setShowPlaySong] = useState(false);


  const playSongFunc = () => {
    setShowPlaySong(true)
    if (playSong) {
      playSong.stop();
    }

    let sound = new Howl({
      src: [activeSongUrl],
      html5: true,
    });
    setPlaySong(sound);
    sound.play();
  };


  const pauseSongFunc = () => {
    playSong.pause();
    setShowPlaySong(false)
  };

  // useEffect(()=>{
  //   playSongFunc()
  // },[])




  return (
    <div className="w-5/6 bg-gradient-to-t from-slate-900 to-black p-3 pl-5 flex relative">
      {selector?.uploadComponent && (
        <div className="absolute top-2  backdrop-blur-md w-[80vw] h-[80vh] z-50 flex items-center justify-start pl-28 ">
          <div className=" w-[60vw] h-[42vh] z-50 bg-gradient-to-t from-slate-900 to-blue-900 top-40 left-12 p-4 rounded-lg ">
            <h2 className="text-white text-3xl font-semibold pt-4 pl-6">
              Upload Your Song
            </h2>
            <form
              className="p-8 flex items-center gap-8  justify-between"
              // onSubmit={handleSubmitSong}
            >
              <div className="flex flex-col gap-2 w-1/2">
                <label className=" text-white text-2xl mb-2" htmlFor="name">
                  Name of Song
                </label>
                <input
                  type="text"
                  value={songData?.name}
                  onChange={handleChange}
                  name="name"
                  id="name"
                  placeholder="Enter the name of your song"
                  className=" rounded-md px-2 py-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label
                  className=" text-white text-2xl mb-2"
                  htmlFor="thumbnail"
                >
                  Thumbnail of song
                </label>
                <input
                  type="text"
                  value={songData?.thumbnail}
                  onChange={handleChange}
                  name="thumbnail"
                  id="thumbnail"
                  placeholder="Paste the image link"
                  className=" rounded-md px-2 py-3 "
                />
              </div>
            </form>
            {uploadedSongFileName ? (
              <h2 className="text-white z-50 pl-10 text-lg">
                <span className="text-2xl font-bold text-blue-500">
                  Song Name :
                </span>{" "}
                {uploadedSongFileName}
              </h2>
            ) : (
              <CloudinaryUpload
                setSongUrl={setSongUrl}
                setUploadedSongFileName={setUploadedSongFileName}
              />
            )}
            <button
              type="submit"
              className="block ml-8 my-8 bg-gradient-to-r from-violet-600 to-blue-600 p-2 rounded-md text-white font-bold"
              onClick={handleSubmitSong}
            >
              Upload Song
            </button>
          </div>
          <button
            className="absolute top-48 right-72 text-white text-2xl z-50"
            onClick={hideUploadComp}
          >
            X
          </button>
        </div>
      )}
      <div>
        <div className="flex  justify-between items-start w-[62vw] bg-gradient-to-b from-blue-800 to-black p-4 pl-8 ml-2 rounded-lg">
          <img
            src="https://cutewallpaper.org/21/arijit-singh-wallpapers/70-Best-Arijit-singh-images-in-2019-My-love-song-Singer-.jpg"
            alt=""
            className="rounded-md"
          />
          <div className="flex flex-col gap-3">
            <p className="text-white">Popular</p>
            <h2 className="text-white text-5xl pr-80">India's Best Singer</h2>
            <p className="text-white">Listen to his latest songs just here!</p>
            <div className="flex items-center gap-5">
              <button className=" flex items-center gap-2 bg-green-500 text-white font-bold hover:bg-green-600 transition-all duration-300 px-5 py-1 rounded-full">
                <AiFillPlayCircle size={28} />
                Play
              </button>
              <button className=" flex items-center gap-2  text-gray-400 hover:text-white font-bold border-2 border-gray-600 hover:border-white transition-all duration-300 px-5 py-1 rounded-full">
                + Follow
              </button>
            </div>
          </div>
        </div>
        <SongLists title={"Today's Hits"} />
        <SongLists title={"India's Top Voice"} />
      </div>
      {selectedSong && (
        <div
          className={`flex flex-col gap-3 px-3 pt-3 rounded-md bg-gradient-to-b from-blue-800 to-black h-[70vh] ${
            selectedSong ? "sticky" : "hidden"
          } top-20 right-0`}
        >
          <img className="rounded-t-md" src={selectedSong?.thumbnail} alt="" />
          <div className="p-2 flex flex-col gap-2">
            <h2 className="text-white font-bold">{selectedSong?.name}</h2>
            <p>{selectedSong?.name?.split("-")[1]}</p>
            <div className="flex items-center justify-between pt-6 px-8">
              <BsFillArrowLeftCircleFill size={36} />
              {showPlaySong ? (
                <BsPauseCircleFill
                  size={36}
                  className="text-green-500 cursor-pointer"
                  onClick={pauseSongFunc}
                />
              ) : (
                <BsFillPlayCircleFill
                  size={36}
                  className="text-green-500 cursor-pointer"
                  onClick={playSongFunc}
                />
              )}
              {/* <BsPauseCircleFill
                size={36}
                className="text-green-500 cursor-pointer"
                onClick={playSongFunc}
              /> */}
              <BsFillArrowRightCircleFill size={36} />
            </div>
            <div className="w-48 my-8 ml-6 bg-gray-400 h-1 relative">
              <div className="absolute w-16 h-16 rounded-full top-[-50px] text-white text-6xl right-0">
                .
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rightbar;
