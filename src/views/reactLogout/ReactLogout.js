import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
const ReactLogout = () => {
  let history = useHistory();
  useEffect(() => {
    localStorage.clear();
    history.push("/LoginReact");
  }, []);
  
  return <></>;
};

export default ReactLogout;