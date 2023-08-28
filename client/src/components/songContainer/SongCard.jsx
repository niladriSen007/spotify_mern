const SongCard = ({song}) => {
  return (
    <div className="bg-slate-900 p-3 rounded-lg cursor-pointer">
      <img src={song?.thumbnail} className="w-48" alt="" />
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold">{song?.name}</h2>
        <h2 className="text-xs">{song?.track.slice(0, 28)}...</h2>
        <h2 className="text-blue-200 text-sm font-bold">{song?.artist}</h2>
      </div>
    </div>
  );
};

export default SongCard;
