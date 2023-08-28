import React from "react";
import SongLists from "../songContainer/SongLists";
import { AiFillPlayCircle } from "react-icons/ai";

const Rightbar = () => {
  return (
    <div className="w-5/6 bg-gradient-to-t from-slate-900 to-black p-3">
      <div className="flex justify-between items-start w-[70vw] bg-gradient-to-b from-blue-900 to-black p-4 ml-2 rounded-lg">
        <img
          src="https://cutewallpaper.org/21/arijit-singh-wallpapers/70-Best-Arijit-singh-images-in-2019-My-love-song-Singer-.jpg"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <p className="text-white">Popular</p>
          <h2 className="text-white text-6xl pr-80">India's Best Singer</h2>
          <p className="text-white">Listen to his latest songs just here!</p>
          <div className="flex items-center gap-5">
            <button className=" flex items-center gap-2 bg-green-500 text-white font-bold hover:bg-green-600 transition-all duration-300 px-5 py-1 rounded-full">
              <AiFillPlayCircle size={28} />
              Play
            </button>
            <button className=" flex items-center gap-2  text-gray-400 hover:text-white font-bold border-2 border-gray-600 hover:border-white transition-all duration-300 px-5 py-1 rounded-full">
              + 
              Follow
            </button>
          </div>
        </div>
      </div>
      <SongLists />
    </div>
  );
};

export default Rightbar;
