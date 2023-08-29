import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../helperFunctions/logout";
import { useEffect, useState } from "react";
import { showUpload } from "../store/slices/uploadSongSlice";

const Navbar = () => {
  const selector = useSelector((state) => state.user);
  const userName = selector?.currentUser?.user?.userName;

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

  const colors = [
    "from-pink-700 to-blue-700",
    "from-blue-700 to-green-500",
    "from-green-500 to-violet-700",
    "from-violet-700 to-pink-700",
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showUploadSong, setShowUploadSong] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentColor = colors[currentColorIndex];



  const uploadSong = () =>{
    dispatch(showUpload())
  }

  return (
    <div className=" overflow-x-hidden bg-black flex items-center justify-between h-16 pr-16 sticky top-0 ">
      <LogoContainer />
      <nav className="text-white flex list-none gap-6 text-lg items-center justify-between relative">
        {userName && (
          <>
            <button
              onClick={uploadSong}
              className={`animate-borderAnimation transition-all duration-300 relative items-center justify-center inline-block p-4 px-2 py-1 w-40 overflow-hidden font-medium text-indigo-600 rounded-full shadow-2xl group bg-gradient-to-r ${currentColor}`}
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Upload Songs</span>
            </button>
            {/* <div className="absolute w-2 h-2 rounded-full bg-white from-top-10 to-top-4"></div> */}
          </>
        )}
        <li>Premium</li>
        <li>Support</li>
        <button className=" px-2 py-1 rounded-full">Download</button>
        <span className="text-xl"> {"|"}</span>
        {userName && <li className="text-green-500"> {userName}</li>}
        {!userName && (
          <button className=" bg-green-500 hover:bg-green-600 transition-all duration-300 px-2 py-1 rounded-full relative">
            <Link to={"/register"}>Register</Link>
          </button>
        )}
        {userName ? (
          <button
            className=" border-2 border-white px-2  rounded-full"
            onClick={(e) => handleLogout(e)}
          >
            <Link to={"/login"}>Logout</Link>
          </button>
        ) : (
          <button className=" border-2 border-white px-2  rounded-full">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
        
      </nav>
    </div>
  );
};

export default Navbar;
