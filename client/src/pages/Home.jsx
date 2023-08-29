import React from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useEffect } from "react";
import { usePlaylist } from "../hooks/usePlaylist";


const Home = () => {

  // const fetchPlayList = async() =>{
  //   const res = await userRequest.get(`/playlist/user/allPlaylist`)
  //   console.log(res?.data)
  // }

  // useEffect(()=>{
  //   fetchPlayList()
  // },[])

  const { playlist, setPlaylist } = usePlaylist();

  return (
    <div>
      <Navbar />
      <div className="flex bg-black text-gray-400 gap-1">
        <Leftbar playlist={playlist} setPlaylist={setPlaylist}/>
        <Rightbar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
