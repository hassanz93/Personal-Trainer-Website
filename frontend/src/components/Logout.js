import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../services/AuthContext";
import { useNavigate} from "react-router-dom";
import "../css/Logout.css"
import { ReactSession } from 'react-client-session';


function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();


  async function logOut() {
     await axios.get("http://localhost:5000/users/logout");
     window.localStorage.clear();
    getLoggedIn();
    navigate("/");
  }

  return  (
    <>
    <input
      className="logout"
      type="button"
      value="Logout"
      onClick={logOut}
    />
    </>
  )
}

export default LogOutBtn;