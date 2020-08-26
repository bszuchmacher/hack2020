import React, {useState} from "react";
import { uploadPicture } from "../lib/API";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview"; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


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
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 20,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(
    CO2_Level,
    city_origin,
    product_type,
    category,
    traceability
  ) {
    return { CO2_Level, city_origin, product_type, category, traceability };
  }
  
  const rows = [
    createData("4", "Israel", "Prigat Orange Juice", "Beverage", "Givat Haim"),
    createData("1", "Israel", "King Cole Black Beans", "Food", "Kibbutz Tzaara"),
    createData("6", "Hungary", "Goulash", "Meal", "Sio"),
  ];
  
  const useStyles = makeStyles({
    table: {
      font: 20
    },
  });
  const classes = useStyles();

  const whatToRender = (a) => {
    if (a > 5) return "#F04141";
    else if (a > 3) return "#F2F23D";
    else return "#98BF82";
  };



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
          idealResolution = {{width:640, height:640 }}
          isFullscreen={isFullscreen}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          isImageMirror={false}
        />
      )}

      <div style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
       <button style={{ marginTop: "2%"}} onClick={refreshPage}>New Scan</button>
       <button style={{ marginTop: "2%"}} type="button" data-toggle="collapse" data-target="#collapseTable" aria-expanded ="false" aria-controls ="collapseTable">Get Info</button>
       <div className="form-group" style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
        {/* <label htmlFor="exampleFormControlFile" style={{marginTop: "4%"}}>Upload Your Picture</label> */}
        <br></br>
        <br></br>
        {/* <input type="file" className="form-control-file"  id="exampleFormControlFile"style ={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}} /> */}
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
        <div className="tableinfo collapse" id="collapseTable" >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CO2 Eq Level per unit </StyledTableCell>
              <StyledTableCell align="center">City of Origin</StyledTableCell>
              <StyledTableCell align="center">
                Product Type&nbsp;
              </StyledTableCell>
              <StyledTableCell align="center">Category&nbsp;</StyledTableCell>
              <StyledTableCell align="center">
                Traceability&nbsp;
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                
              <StyledTableRow
                key={row.CO2_Level}
                style={{ backgroundColor: whatToRender(row.CO2_Level) }}
              >
                <StyledTableCell component="th" scope="row" align="center">
                  {row.CO2_Level}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.city_origin}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.product_type}
                </StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.traceability}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
       </div>
    </div>
    </div>
  );
}

export default CameraFeedNew;