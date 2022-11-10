import { useContext } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import dp from "../../assets/download.jpeg";

export default function TopBar() {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/clientform">
              ADD REQUEST
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/complainform">
              COMPLAINT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/aboutus">
              ABOUT
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}
