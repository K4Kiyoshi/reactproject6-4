import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import { useHistory } from "react-router-dom";

const TestCode=()=>{
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
        <div>
            <Welcome name="Sara" age="22" />
            <Welcome name="Nice" age="35" />
            <Welcome name="Elite" age="40"/>
        </div>
    )
}

export default TestCode;