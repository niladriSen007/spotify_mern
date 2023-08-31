import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar/Leftbar";
import { usePlaylist } from "../hooks/usePlaylist";
import { useFetchSong } from "../hooks/useFetchSingleSong";
import RecommendedSongs from "../components/RecommendedSongs";
import {AiOutlineHeart} from "react-icons/ai"
import { Howl, Howler } from "howler";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import UploadSongs from "../components/UploadSongs";
import { userRequest } from "../requestMethods";
import { addLikedSong, likeSongAddStatus } from "../store/slices/songSlice";

const SingleSongPage = () => {
  const { songId } = useParams();
  const { playlist, setPlaylist } = usePlaylist();

  const [playSong, setPlaySong] = useState();
  const [showPlaySong, setShowPlaySong] = useState(false);

  const song = useFetchSong(songId);
  console.log(song);

  const selector = useSelector((state) => state.user);
  const userName = selector?.currentUser?.user?.userName;

  const playSongFunc = () => {
    if (userName) {
      setShowPlaySong(true);
      if (playSong) {
        playSong.stop();
      }

      let sound = new Howl({
        src: [song?.track],
        html5: true,
      });
      setPlaySong(sound);
      sound.play();
    }else{
      alert("Login to play song")
    }
  };

  const pauseSongFunc = () => {
    playSong.pause();
    setShowPlaySong(false);
  };


  const selectorUpload = useSelector((state) => state?.upload);

  const dispatch = useDispatch()


  const likeSong = async() =>{
      const {data} = await userRequest.post(`/like/song`,{userId: selector?.currentUser?.user?.userId,songId:song?._id})
      console.log(data)
      dispatch(likeSongAddStatus(true))
  }

  return (
    <div>
      <Navbar />
      <div className="flex bg-black text-gray-400 gap-1">
        <Leftbar playlist={playlist} setPlaylist={setPlaylist} />

        <div className=" bg-gradient-to-t from-black to-blue-950 w-[80vw] h-[90vh] m-2 rounded-lg p-6 px-16 flex gap-6 justify-between relative">
          {selectorUpload?.uploadComponent && <UploadSongs />}
          <div className="flex flex-col gap-4">
            <div className="flex gap-16 items-start ">
              <img
                src={song?.thumbnail}
                alt=""
                className=" rounded-lg object-cover w-[24vw] "
              />
              <div className="py-8 flex flex-col gap-6">
                <h2 className="text-white font-bold text-4xl">
                  {song?.name?.split("-")[0]}
                </h2>
                <p className="text-2xl ">
                  {" "}
                  {song?.name?.split("-")[1].split("(")[1].split(")")[0]}
                </p>
                <p className="text-sm w-[30vw] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint, expedita suscipit provident quis modi iusto,
                  incidunt praesentium qui sed velit quia esse placeat doloribus
                  sit. Nobis dolorum fugiat ab suscipit ad dicta nemo, fugit
                </p>
                <div>
                  <p className="text-lg pb-4">Tags :</p>
                  <div className="flex gap-5">
                    <button className="text-white px-2 py-1 rounded-full border-white border-2">
                      Romantic
                    </button>
                    <button className="text-white px-2 py-1 rounded-full border-white border-2">
                      Arijit
                    </button>
                    <button className="text-white px-2 py-1 rounded-full border-white border-2">
                      Moment
                    </button>
                    <button className="text-white px-2 py-1 rounded-full border-white border-2">
                      Trending
                    </button>
                  </div>
                </div>
                <div className="flex gap-6">
                  <button className="text-white px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 w-48 mt-6 font-bold text-lg">
                    + Add to Playlist
                  </button>
                  <button onClick={likeSong} className="font-bold text-lg  text-white px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-700 border-white w-48 mt-6 flex items-center justify-center gap-2">
                    
                    <AiOutlineHeart size={22}/> Like
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-6 px-24 w-[60vw]">
              <BsFillArrowLeftCircleFill size={36} />
              {showPlaySong ? (
                <BsPauseCircleFill
                  size={36}
                  className="text-green-500 cursor-pointer"
                  onClick={pauseSongFunc}
                />
              ) : (
                <BsFillPlayCircleFill
                  size={36}
                  className="text-green-500 cursor-pointer"
                  onClick={playSongFunc}
                />
              )}
              <BsFillArrowRightCircleFill size={36} />
            </div>
            <div className="w-[56vw] my-10 ml-6 bg-gray-400 h-1 relative">
              <div className="absolute w-16 h-16 rounded-full top-[-50px] text-white text-6xl right-40">
                .
              </div>
            </div>
          </div>
          <RecommendedSongs />
        </div>
      </div>
    </div>
  );
};

export default SingleSongPage;
