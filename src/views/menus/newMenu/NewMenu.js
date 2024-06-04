import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const NewMenu=()=>{
let history = useHistory();
    useEffect(() => {
        let flag = localStorage.getItem(`LoginProcess`);
       
        if (flag == "true") {
          console.log("Login process success")
        } else {
          history.push(`/Reactlogin`);
        }
      }, []);


    return(
        <>
        <h1>Hello World</h1>
       <h1>Hello World</h1>
        </>
      
    )
}

export default NewMenu;