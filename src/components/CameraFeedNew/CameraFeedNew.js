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
    console.log("productData", productData);
    props.onHandleData(productData)
  }

   function refreshPage() {
    window.location.reload(false);
  }

 
  const isFullscreen = false;
  return (
    <div className='container pt-3'>
        <div className='section-header pt-5 text-center'>
          <h3 className='section-title'>
            <span>Scan </span>Your Product Here:
          </h3>
          <br></br>
    </div>
    <div>
      {dataUri ? (
        <ImagePreview style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}} dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera 
        
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
        //   onTakePhoto={<TableContainer/>}
          isFullscreen={isFullscreen}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          isImageMirror={false}
        />
      )}
      <div style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
       <button style={{ marginTop: "2%"}} onClick={refreshPage}>New Scan</button>
       <div className="form-group" style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
        {/* <label htmlFor="exampleFormControlFile" style={{marginTop: "4%"}}>Upload Your Picture</label> */}
        <br></br>
        <br></br>
        {/* <input type="file" className="form-control-file"  id="exampleFormControlFile"style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}} /> */}
        </div>
       </div>
        <div className='container pt-5'>
        <div className='section-header pt-5 text-center'>
          <h3 className='section-title'>
            <span>Your </span>Product Info:
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Here is a little bit about your product...
          </h6>
          </div>
        </div>
    </div>
    </div>
  );
}

export default CameraFeedNew;