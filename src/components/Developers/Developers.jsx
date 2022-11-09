import React from "react";
import "./developers.css";
import thushalya from "../../assets/developers/thushalya.jpeg";
import nuwan from "../../assets/developers/nuwan.jpg";
import kalindu from "../../assets/developers/kalindu.jpeg";

const Developers = () => {
  return (
    <div className="devmain">
      <h1>Developers</h1>
      <div className="developers">
        <div className="developerItem">
          <img className="developerImg" src={nuwan} />
          <div className="developerlinks">
            <a href="https://www.facebook.com/nuwan.deshapriya.714"><i className="topIcon fab fa-facebook-square"></i></a>
           <a href="https://www.linkedin.com/in/nuwan-perera-aa0a08218/"><i className="topIcon fab fa-brands fa-linkedin"></i></a> 
           <a href="https://github.com/Nuwa-Hub"> <i class=" topIcon fab fa-brands fa-github"></i></a>
          </div>
          <div>
          <p>@ : Nuwan Perera</p>
          <p>Tel : +94 5929879</p>
          </div>
        </div>
        <div className="developerItem">
          <img className="developerImg" src={thushalya} />
          <div className="developerlinks">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-brands fa-linkedin"></i>
            <i class=" topIcon fab fa-brands fa-github"></i>
          </div>
          <div>
          <p>@ : Thushalya Weerasuriya</p>
          <p>Tel : +94 754365392</p>
          </div>
        </div>
        <div className="developerItem">
          <img className="developerImg" src={kalindu} />
          <div className="developerlinks">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-brands fa-linkedin"></i>
            <i class=" topIcon fab fa-brands fa-github"></i>
          </div>
          <div>
          <p>@ : Kalindu Gandara</p>
          <p>Tel : +94000000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
