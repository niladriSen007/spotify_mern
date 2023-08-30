import { useFetchSongs } from "../hooks/useFetchSongs";

const RecommendedSongs = () => {
  const songs = useFetchSongs();
  return (
    <div>
        <h2 className="text-white text-xl py-8">Recommended  - </h2>
      <div className="flex flex-col gap-6">
        {songs?.map((song) => (
          <div key={song?._id} className="flex items-center  gap-2">
            <img
              className="w-16 h-16 rounded-md"
              src={song?.thumbnail}
              alt=""
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-md text-white">
                {song?.name?.split("-")[0]}...
              </h3>
              <p className="text-xs text-gray-500">
                {song?.name?.split("-")[1].split("(")[1].split(")")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSongs;
