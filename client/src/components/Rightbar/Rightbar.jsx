import React from "react";
import SongLists from "../songContainer/SongLists";
import { AiFillPlayCircle } from "react-icons/ai";
import { indiasTop, songs } from "../../constants/data";
import {BsFillArrowLeftCircleFill,BsPauseCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"

const Rightbar = () => {
  return (
    <div className="w-5/6 bg-gradient-to-t from-slate-900 to-black p-3 pl-5 flex">
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
              <BsPauseCircleFill size={36} className="text-green-500"/>
              <BsFillArrowRightCircleFill size={36}/>
          </div>
          <div className="w-48 my-8 ml-6 bg-gray-400 h-1 relative">
             <div className="absolute w-16 h-16 rounded-full top-[-50px] text-white text-6xl right-0">.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
