import {CRow, CModal, CModalHeader,CModalBody, CImg, CButton} from "@coreui/react";
import React from "react";

const ResultClickModel = (props) => {
    const {
        popUpShow,
        closeBtn,
        userName,
        emailAddress
      } = props;
    
    return (
        <>
<CModal
        size="lg"
        centered
        closeOnBackdrop={true}
        show={popUpShow}
        id="advanced"
        onClose={closeBtn}
      >
 <CModalHeader
          style={{
            background: "#eff1fe",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            justifyContent: "end",
            paddingBottom: "10px",
          }}
        >
          <CRow style={{ marginRight: "10px", cursor: "pointer" }}>
            <CImg
              onClick={closeBtn}
              src={"/image/Close.svg"}
              width={33}
              height={33}
            />
          </CRow>
        </CModalHeader>
        <CModalBody
          style={{
            background: "#eff1fe",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
        <p>Hello</p>
        <p>My Name is {userName}</p>
        <p>My Email is {emailAddress}</p>

        <CRow style={{justifyContent:"center"}}>
            <CButton className="btn-success">Save</CButton>
        </CRow>
        </CModalBody>
      </CModal>
        </>
    )
    }

export default ResultClickModel;