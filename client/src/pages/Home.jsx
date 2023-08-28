import React from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-black text-gray-400 gap-1">
        <Leftbar />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
