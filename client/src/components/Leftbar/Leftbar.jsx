import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineArrowRight,AiOutlineDown } from "react-icons/ai";

const Leftbar = () => {
  return (
    <div className="w-1/6 h-screen p-5 flex flex-col gap-10 bg-gradient-to-r from-slate-900 to-black">
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
        <button className=" w-24 rounded-full px-2 py-1 text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300">Playlist</button>
        <div className="flex items-start justify-between px-2">
          <AiOutlineSearch size={28} className=" cursor-pointer hover:text-white transition-all duration-300"/>
          <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-all duration-300">Recent <AiOutlineDown size={14}/></span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
