import React from "react";
import { songs } from "../../constants/data";
import SongCard from "./SongCard";

const SongLists = () => {
  return (
    <div className="flex items-center gap-8 p-6 pt-10">
      {songs.map((song) => (
         <SongCard key={song.id} song={song}/>
      ))}
    </div>
  );
};

export default SongLists;
