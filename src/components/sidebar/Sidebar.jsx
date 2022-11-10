import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Rating from "@mui/material/Rating";
import RatingForm from "../RatingForm/RatingForm";
import { getRatings } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";

export default function Sidebar() {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => state.rating.ratings);

  useEffect(() => {
    getRatings(dispatch);
  }, [dispatch]);

  return (
    <div className="sidebarmain">
      <h3>Rate Us!</h3>
      <RatingForm distpatch={dispatch}/>
      <div className="sidebar">
        {ratings.map((rating, index) => (
          <div className="sidebarItem" key={index}>
            {/* <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        /> */}
            <div className="ratingdiv">
              <h2 className="sidebarTitle">{rating.name}</h2>
              <Rating
                name="read-only"
                precision={0.5}
                value={rating.rate}
                readOnly
              />
            </div>

            <p className="rateptag">{rating.comment}</p>
            <p>
            {rating.createdDate ?
              <Moment fromNow>{ rating.createdDate }</Moment>
            : <></>}
            </p>
          </div>
        ))}
        <div className="sidebarItem">
          <span className="sidebarTitle2">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
         
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
