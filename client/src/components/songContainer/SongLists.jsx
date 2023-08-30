import SongCard from "./SongCard";
import { useFetchSongs } from "../../hooks/useFetchSongs";

const SongLists = ({title}) => {

  const songsList = useFetchSongs()
  // console.log(songsList)

  

  return (
    <div className="px-6 pt-10">
      <h2 className="py-8 text-2xl font-bold text-white">{title}</h2>
      <div className="grid grid-cols-4 place-items-center gap-20  w-max">
        {songsList?.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongLists;
