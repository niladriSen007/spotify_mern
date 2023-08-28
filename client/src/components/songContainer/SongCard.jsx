import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const SongCard = ({ song }) => {
  const [showPlay, setShowPlay] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <div className="w-max bg-slate-900 p-3 rounded-lg cursor-pointer ">
        <img src={song?.thumbnail} className="w-48" alt="" />
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-bold">{song?.name}</h2>
          <h2 className="text-xs">{song?.track.slice(0, 28)}...</h2>
          <h2 className="text-blue-200 text-sm font-bold">{song?.artist}</h2>
        </div>
      </div>
      {showPlay && (
        <div className="absolute bottom-0 pl-5 text-green-600 w-full bg-gradient-to-t from-black to-transparent h-36 z-50 ">
          <AiFillPlayCircle size={42} />
        </div>
      )}
    </div>
  );
};

export default SongCard;
