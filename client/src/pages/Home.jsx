import React from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useEffect } from "react";
// import { userRequest } from "../requestMethods";


const Home = () => {

  // const fetchPlayList = async() =>{
  //   const res = await userRequest.get(`/playlist/user/allPlaylist`)
  //   console.log(res?.data)
  // }

  // useEffect(()=>{
  //   fetchPlayList()
  // },[])

  return (
    <div>
      <Navbar />
      <div className="flex bg-black text-gray-400 gap-1">
        <Leftbar />
        <Rightbar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
