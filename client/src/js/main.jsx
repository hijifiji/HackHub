import React from "react";
import ReactDOM from "react-dom";
import HackerHub from "./HackerHub.jsx";
const wrapper = document.getElementById("react-cont");

ReactDOM.render(
        <div>
            { (location.hostname === "hunterhub.net" || location.hostname === "127.0.0.1") ? 
            <HackerHub url="http://127.0.0.1:4564" />
            :<HackerHub url="http://192.252.235.8:4564"/>
          }
          
        </div>
, wrapper);



