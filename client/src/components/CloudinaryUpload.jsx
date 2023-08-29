import { openUploadWidget } from "../utils/CloudinaryService";


const CloudinaryUpload = () => {
  const uploadSongWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "djfohvu0l",
        uploadPreset: "gnqht9q1",
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          console.log(result?.info)
        }else{
            if(error)
                console.log(error)
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="  bg-green-600  px-2 py-1 rounded-md text-white ml-8" onClick={uploadSongWidget}>
      Upload Song
    </button>
  );
};

export default CloudinaryUpload;