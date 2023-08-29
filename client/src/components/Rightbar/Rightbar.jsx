import React, { useState } from "react";
import SongLists from "../songContainer/SongLists";
import { AiFillPlayCircle } from "react-icons/ai";
import { indiasTop, songs } from "../../constants/data";
import {
  BsFillArrowLeftCircleFill,
  BsPauseCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideUpload } from "../../store/slices/uploadSongSlice";
import CloudinaryUpload from "../CloudinaryUpload";

const Rightbar = () => {

  // console.log(window.cloudinary)
  const [playSong, setPlaySong] = useState(true);

  const selector = useSelector((state) => state?.upload);
  console.log(selector);

  const dispatch = useDispatch();

  const hideUploadComp = () => {
    dispatch(hideUpload());
  };
  return (
    <div className="w-5/6 bg-gradient-to-t from-slate-900 to-black p-3 pl-5 flex relative">
      {selector?.uploadComponent && (
        <>
          <div className="absolute w-[60vw] h-[72vh] z-50 bg-gradient-to-b from-slate-900 to-blue-900 top-20 left-12 p-4 rounded-lg">
            <h2 className="text-white text-3xl font-semibold pt-4 pl-6">
              Upload Your Song
            </h2>
            <form className="p-8 flex items-center gap-8  justify-between">
              <div className="flex flex-col gap-2 w-1/2">
                <label className=" text-white text-2xl mb-2" htmlFor="songName">
                  Name of Song
                </label>
                <input
                  type="text"
                  name=""
                  id="songName"
                  placeholder="Enter the name of your song"
                  className=" rounded-md px-2 py-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label className=" text-white text-2xl mb-2" htmlFor="songName">
                  Thumbnail of song
                </label>
                <input
                  type="text"
                  name=""
                  id="songName"
                  placeholder="Enter the name of your song"
                  className=" rounded-md px-2 py-3 "
                />
              </div>
            </form>
              <CloudinaryUpload />
          </div>
          <button
            className="absolute top-28 right-96 text-white text-2xl z-50"
            onClick={hideUploadComp}
          >
            X
          </button>
        </>
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
        <SongLists title={"Today's Hits"} songs={songs} />
        <SongLists title={"India's Top Voice"} songs={indiasTop} />
      </div>
      <div className="flex flex-col gap-3 px-3 pt-3 rounded-md bg-gradient-to-b from-blue-900 to-black h-[70vh] sticky top-20 right-0">
        <img
          className="rounded-t-md"
          src="https://m.media-amazon.com/images/I/512l+TnATZL._UXNaN_FMjpg_QL85_.jpg"
          alt=""
        />
        <div className="p-2 flex flex-col gap-2">
          <h2 className="text-white font-bold">
            Tum kya mile (Rocky Aur Rani Kii Prem Kahaani)
          </h2>
          <p>Arijit Singh, Shreya Ghosal</p>
          <div className="flex items-center justify-between pt-6 px-8">
            <BsFillArrowLeftCircleFill size={36} />
            {playSong ? (
              <BsPauseCircleFill
                size={36}
                className="text-green-500 cursor-pointer"
                onClick={() => setPlaySong(false)}
              />
            ) : (
              <BsFillPlayCircleFill
                size={36}
                className="text-green-500 cursor-pointer"
                onClick={() => setPlaySong(true)}
              />
            )}
            <BsFillArrowRightCircleFill size={36} />
          </div>
          <div className="w-48 my-8 ml-6 bg-gray-400 h-1 relative">
            <div className="absolute w-16 h-16 rounded-full top-[-50px] text-white text-6xl right-0">
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
