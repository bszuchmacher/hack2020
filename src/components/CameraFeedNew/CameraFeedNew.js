import React, {useState} from "react";
import { uploadPicture } from "../lib/API";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview"; // source code : ./src/demo/AppWithImagePreview/ImagePreview



function CameraFeedNew(props) {
  const [dataUri, setDataUri] = useState("");

  async function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
    const index = dataUri.indexOf(",");
    const pictureData = dataUri.slice(index + 1, dataUri.length - index);
    // console.log(pictureData);
    const imagetoSend = {};
    imagetoSend.image = pictureData;
    imagetoSend.type = "jpg";
    const productData = await uploadPicture(imagetoSend);
    // console.log("productData", productData);
  }

   function refreshPage() {
    window.location.reload(false);
  }

 
  const isFullscreen = false;
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera

          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          isImageMirror={false}
        />
      )}
       <button onClick={refreshPage} style ={"margin-left: 47%"} >Force update</button>
    </div>
  );
}

export default CameraFeedNew;