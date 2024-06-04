import { CButton, CCol, CInput, CRow, CSelect } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { emailChk, nullChk, numberChk, validateName } from "../common/CommonValidation";
import SuccessError from "../common/SuccessError";
import Confirmation from "../common/Confirmation";
import { useHistory } from "react-router-dom";
import ResultClickModel from "./ResultClickModel";
const FirstPage=()=>{
let history = useHistory();
const [success, setSuccess] = useState([]); // for success message
const [error, setError] = useState([]); // for error message
const [userName, setUserName] = useState(""); // for userName variable
const [email,setEmail] = useState(""); // for email variables
const [password,setPassword] =useState("");// for password
const [age,setAge] =useState("");// for age
const [phoneNumber,setPhoneNumber] =useState("");// for phoneNumber
const [japaneseSkill] = useState([
  { id: "1", name: "N1" },
  { id: "2", name: "N2" },
  { id: "3", name: "N3" },
  { id: "4", name: "N4" },
  { id: "5", name: "N5" }
]); // japanese skill data
const [selectedJapan,setSelectedJapan] = useState(""); //selected Japan
const [confirmationModal, setConfirmationModal] = useState(false);
const [popUpShow, setPopUpShow] = useState(false);  
const [content, setContent] = useState("");
const [confirmType, setConfirmType] = useState("");

useEffect(() => {
  let flag = localStorage.getItem(`LoginProcess`);
 
  if (flag == "true") {
    console.log("Login process success")
  } else {
    history.push(`/Reactlogin`);
  }
}, []);

const nameChange = (e)=>{
    setUserName(e.target.value);
}
const emailChange = (e) =>{
    setEmail(e.target.value);
}
const passwordChange = (e) =>{
  setPassword(e.target.value);
}
const ageChange = (e) =>{
  setAge(e.target.value);
}
const phoneNumberChange = (e) =>{
  setPhoneNumber(e.target.value);
}
const JapaneseChange = (e) =>{
  setSelectedJapan(e.target.value);
}
const saveClick = () =>{
  let errMsg= [];
      if (!nullChk(userName)) {
        errMsg.push("Please fill Username");
      }else  if (!validateName(userName)) {
        errMsg.push("Please fill Character Only in Username");
      }

      if (!nullChk(password)) {
        errMsg.push("Please fill Password");
      } 
      
      if (!nullChk(age)) {
        errMsg.push("Please fill age");
      } else  if (!numberChk(age)) {
        errMsg.push("Please fill number only age");
      } 

      if (!nullChk(phoneNumber)) {
        errMsg.push("Please fill phone number");
      }else  if (!numberChk(phoneNumber)) {
        errMsg.push("Please fill number only in Phone Number");
      }

      if (!nullChk(email)) {
        errMsg.push("Please fill Email");
      }else  if (!emailChk(email)) {
        errMsg.push("Please fill Email Format");
      }

      if(selectedJapan == ""){
        errMsg.push("Please select value in Japannese Skill");
      }

      if (errMsg.length <= 0) {
        setError([]);
        setConfirmationModal(true);
        setContent("Are you sure want to save?");
        setConfirmType("save");
      }else{
        setError(errMsg)
      }
    }

    const saveOK = () =>{
      localStorage.setItem("USERNAME",userName);
      localStorage.setItem("AGE",age);
      localStorage.setItem("PASSWORD",password);
      localStorage.setItem("EMAIL",email);
      localStorage.setItem("PHONE",phoneNumber);
      localStorage.setItem("JAPAN",selectedJapan);
      history.push(`/result`);
      setConfirmationModal(false);
    }

    const deleteClick = () =>{
        setConfirmationModal(true);
        setContent("Are you sure want to delete?");
        setConfirmType("delete");
    }

    const deleteOK = () =>{
      alert("Delete");
      setConfirmationModal(false);
    }

    const popUpClick = () =>{
      setPopUpShow(true);
    }

    return(
        <>
        <h1>Welcome to React</h1>
        <SuccessError success={success} error={error} />
        <CRow className="mt-4"> 
          <CCol lg="5">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Name</label><span style={{color:"red"}}> *</span></CCol>
            <CCol lg="8"> 
            <CInput type ="text" value={userName} onChange={nameChange}/>
                 </CCol>
          </CRow>
          </CCol>
          <CCol lg="2"></CCol>
          <CCol lg="5" >
          <CRow>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Password</label></CCol>
            <CCol lg="8"> <CInput type="password" value={password} onChange={passwordChange}/></CCol>
            <CCol lg="1"></CCol>
         </CRow>
          </CCol>
        </CRow>
        <CRow className="mt-4"> 
          <CCol lg="5">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Ph Number</label></CCol>
            <CCol lg="8"> <CInput type="text" value={phoneNumber} onChange={phoneNumberChange}/></CCol>
          </CRow>
          </CCol>
          <CCol lg="2"></CCol>
          <CCol lg="5" >
          <CRow>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Japanese Skill</label></CCol>
            <CCol lg="8">
                
            <CSelect
            value={selectedJapan} onChange={JapaneseChange}
            >
                <option value="">-- Select --</option>
                {japaneseSkill.map((data, index) => {
                  return (
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  )
                }
                )}
              </CSelect>
            
            </CCol>
            <CCol lg="1"> </CCol>
          </CRow>
          </CCol>
        </CRow>

        <CRow className="mt-4"> 
          <CCol lg="5">
         <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Age</label></CCol>
            <CCol lg="8"> <CInput type="text" value ={age} onChange={ageChange}/></CCol>
         </CRow>
          </CCol>
          <CCol lg="2"></CCol>
          <CCol lg="5">
            
          <CRow>
            <CCol lg="3"><label style={{marginTop:"5px"}}>Email</label></CCol>
            <CCol lg="8"> <CInput type="text" 
            value ={email} onChange={emailChange}
            /></CCol>
            <CCol lg="1"> </CCol>
          </CRow>
          </CCol>
        </CRow>

       
       <CRow style={{justifyContent:"center"}} className="mt-3">
       <CButton className="btn-success" onClick={saveClick}>Save</CButton>&nbsp;&nbsp;
       <CButton className="btn-danger" onClick={deleteClick}>Delete</CButton>&nbsp;&nbsp;
       <CButton className="btn-facebook" onClick={popUpClick}>Pop Up</CButton>
       </CRow>

       <Confirmation
            show={confirmationModal}
            content={content}
            type={confirmType}
            saveOK={saveOK}
            deleteOk={deleteOK}
            cancel={() => setConfirmationModal(false)}
            cancelButton="No"
            okButton="Yes"
          />

        <ResultClickModel 
        popUpShow={popUpShow} 
        closeBtn={() => setPopUpShow(false)} 
        userName={userName}
        emailAddress={email}
        />
      
   
        </>
    )
}

export default FirstPage;