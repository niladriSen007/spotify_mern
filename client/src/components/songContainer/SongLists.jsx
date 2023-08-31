import SongCard from "./SongCard";
import { useFetchSongs } from "../../hooks/useFetchSongs";

const SongLists = ({title}) => {

  let songsList = useFetchSongs()
  // console.log(songsList)

  if(title == "India's Top Voice")
    songsList = songsList?.slice(4)
  else
    songsList = songsList?.slice(0,4)

  

  return (
    <div className="px-6 pt-10">
      <h2 className="py-8 text-2xl font-bold text-white">{title}</h2>
      <div className="grid grid-cols-4 place-items-center gap-20  w-max">
        {songsList?.map((song) => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongLists;
