import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { setSongUrlNew } from "../store/slices/songSlice";
import { hideUpload } from "../store/slices/uploadSongSlice";
import { postSong } from "../helperFunctions/postSong";
import CloudinaryUpload from "./CloudinaryUpload";

const UploadSongs = () => {

  // const selector = useSelector((state) => state?.upload);


  const [songData, setSongData] = useState({
    name: "",
    thumbnail: "",
  });


  const [songDetails, setSongDetails] = useState({
    name: "",
    thumbnail: "",
    track: "",
  });

  const song = useSelector((state) => state?.song);

  const [selectedSong, setSelectedSong] = useState();

  const [songUrl, setSongUrl] = useState();

  const [uploadedSongFileName, setUploadedSongFileName] = useState();

  const dispatch = useDispatch();


  const fetchSingleSong = async () => {
    const { data } = await userRequest.get(`/song/get/song/${song?.songId}`);
    console.log(data?.song);
    setSelectedSong(data?.song);
    dispatch(setSongUrlNew(data?.song?.track));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value)
    setSongData((prevSongData) => ({
      ...prevSongData,
      [name]: value,
    }));
  };

  const handleSubmitSong = (e) => {
    e.preventDefault();
    setSongDetails((prevSongDetails) => ({
      ...prevSongDetails,
      ...songData,
      track: songUrl,
    }));
    setUploadedSongFileName("");
    setSongData({});
    dispatch(setSongUrlNew(songUrl));
    setSongUrl("");
    console.log(songDetails)

    dispatch(hideUpload());
  };

  // console.log(songDetails)

  const hideUploadComp = () => {
    dispatch(hideUpload());
  };


  useEffect(() => {
    fetchSingleSong();
  }, [song?.songId]);

  useEffect(() => {
    postSong(songDetails);
  }, [songDetails]);

  return (
    <div>
      
        <div className="absolute top-2  backdrop-blur-md w-[78vw] h-[80vh] z-50 flex items-center justify-start pl-28 ">
          <div className=" w-[60vw] h-[42vh] z-50 bg-gradient-to-t from-slate-900 to-blue-900 top-40 left-12 p-4 rounded-lg ">
            <h2 className="text-white text-3xl font-semibold pt-4 pl-6">
              Upload Your Song
            </h2>
            <form
              className="p-8 flex items-center gap-8  justify-between"
              // onSubmit={handleSubmitSong}
            >
              <div className="flex flex-col gap-2 w-1/2">
                <label className=" text-white text-2xl mb-2" htmlFor="name">
                  Name of Song
                </label>
                <input
                  type="text"
                  value={songData?.name}
                  onChange={handleChange}
                  name="name"
                  id="name"
                  placeholder="Enter the name of your song"
                  className=" rounded-md px-2 py-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label
                  className=" text-white text-2xl mb-2"
                  htmlFor="thumbnail"
                >
                  Thumbnail of song
                </label>
                <input
                  type="text"
                  value={songData?.thumbnail}
                  onChange={handleChange}
                  name="thumbnail"
                  id="thumbnail"
                  placeholder="Paste the image link"
                  className=" rounded-md px-2 py-3 "
                />
              </div>
            </form>
            {uploadedSongFileName ? (
              <h2 className="text-white z-50 pl-10 text-lg">
                <span className="text-2xl font-bold text-blue-500">
                  Song Name :
                </span>{" "}
                {uploadedSongFileName}
              </h2>
            ) : (
              <CloudinaryUpload
                setSongUrl={setSongUrl}
                setUploadedSongFileName={setUploadedSongFileName}
              />
            )}
            <button
              type="submit"
              className="block ml-8 my-8 bg-gradient-to-r from-violet-600 to-blue-600 p-2 rounded-md text-white font-bold"
              onClick={handleSubmitSong}
            >
              Upload Song
            </button>
          </div>
          <button
            className="absolute top-48 right-72 text-white text-2xl z-50"
            onClick={hideUploadComp}
          >
            X
          </button>
        </div>
    </div>
  );
};

export default UploadSongs;
