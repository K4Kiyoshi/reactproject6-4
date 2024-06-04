import {CRow, CModal, CModalHeader,CModalBody, CImg, CButton, CCol, CInput} from "@coreui/react";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

import { useHistory } from "react-router-dom";

const Test = () => {
    const [imageData, setImageData] = useState('');
    const [files, setFiles] = useState([]);
    let history = useHistory();
    useEffect(() => {
      let flag = localStorage.getItem(`LoginProcess`);
     
      if (flag == "true") {
        console.log("Login process success")
      } else {
        history.push(`/Reactlogin`);
      }
    }, []);


    const handleDropImage = (acceptedFiles) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          setImageData(dataUrl.split(',')[1]);
        };
        reader.readAsDataURL(acceptedFiles[0]);
      }

      const handleDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
      };
    
      const removeFile = () => {
        setFiles([]);
      }
      console.log(files);
    return (
        <>
       <CRow>
        <h1>Testing</h1>
       </CRow>
       <br></br>
       <CRow> 
        <Dropzone onDrop={handleDropImage}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <CButton className="btn-behance">Select Photo</CButton>
            </div>
          )}
        </Dropzone>

       
       <CRow className="mt-5">
       {imageData && (
          <img
            style={{ width: "500px", marginTop: "20px" }}
            src={`data:image/jpeg;base64,${imageData}`} alt="Uploaded image" />
        )}
       </CRow>
        
        
       </CRow>

       <CRow>
       <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <CInput type="text" readOnly placeholder="Click to select files" />
              </div>
            )}
          </Dropzone>
          <br></br>
          <div style={{ display: "flex", marginLeft:"10px"}}>
            {files.map((a,i) => (
              <>
                <li style={{ marginTop: "5px" }} key={i}>{a.name}</li>   
                 <label  style={{ marginLeft: "20px" ,color:"red",
                  cursor:"pointer", marginTop:"7px"}} 
                 onClick={removeFile}>X</label>
              </>

            ))}
          </div>
       </CRow>
       </>
    )
    }

export default Test;