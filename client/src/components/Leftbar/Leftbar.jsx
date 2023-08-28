import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineDown,
} from "react-icons/ai";
import { usePlaylist } from "../../hooks/usePlaylist";
import { useSelector } from "react-redux";

// const playList = [];

const Leftbar = () => {

  const selector = useSelector((state) => state.user);
  const currentUser = selector?.currentUser?.user

  const { playlist, setPlaylist } = usePlaylist();
  //  console.log(playlist)

  return (
    <div className=" w-1/6 h-screen sticky left-0 top-16 z-50">
      <div className=" p-5 h-screen flex flex-col gap-10 bg-gradient-to-t from-slate-900 to-black ">
        <div className="flex flex-col gap-3">
          <div className="flex items-end  gap-2 text-lg cursor-pointer hover:text-white transition-all duration-300">
            <AiFillHome size={36} />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2 text-lg cursor-pointer hover:text-white transition-all duration-300">
            <AiOutlineSearch size={36} />
            <span>Search</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between text-lg cursor-pointer ">
            <div className="flex gap-2 items-center hover:text-white transition-all duration-300">
              <BiLibrary size={36} />
              <span>Your Library</span>
            </div>
            <div className="flex gap-3 items-center ">
              <AiOutlinePlus
                className="hover:text-white transition-all duration-300 hover:bg-gray-800 rounded-full p-1 "
                size={28}
              />
              <AiOutlineArrowRight
                className="hover:text-white transition-all duration-300 hover:bg-gray-800 rounded-full p-1 "
                size={28}
              />
            </div>
          </div>
          <button className=" w-max rounded-full px-2 py-1 text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300">
            💗 Liked Songs
          </button>
          <div className="flex items-start justify-between px-2">
            <AiOutlineSearch
              size={28}
              className=" cursor-pointer hover:text-white transition-all duration-300"
            />
            <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-all duration-300">
              Recent <AiOutlineDown size={14} />
            </span>
          </div>
          <button className=" w-max rounded-full px-2 py-1 text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300">
            {( currentUser && playlist.length !== 0) ? "Your Playlists"  : "+ Create Playlist"  }
          </button>
          {(playlist.length !== 0 && currentUser) && (
            <div className="flex flex-col gap-4">
              {playlist?.map((pl) => (
                <div key={pl._id} className="flex items-center gap-3 cursor-pointer bg-gradient-to-r from-slate-900 to-blue-700 p-1 rounded-full w-60">
                  <img
                    src={pl?.thumbnail}
                    alt=""
                    className="w-12 p-1 h-12 rounded-full object-cover"
                  />
                  <span>{pl?.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute px-8 flex flex-col gap-3 pl-4 bottom-0 pt-6   border-gray-900 bg-gradient-to-rt from-slate-900 to-black w-full h-56">
        <div className="grid grid-cols-4 gap-4">
          <span>Policy</span>
          <span>Legal</span>
          <span>Cookies</span>
          <span>Privacy</span>
          <span>Ads</span>
          <span>Center</span>
          <span>Careers</span>
          <span>Connect</span>
          <span>About</span>
        </div>
        <button className="px-2 w-max py-1 border-2 border-white text-white rounded-full ">
          English
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
