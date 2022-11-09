import React, { useEffect, useState } from "react";
import "./ratingform.css";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addRate, getRatings } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const RatingForm = () => {
  const [rate, setRate] = useState(0);
  const [err, seterr] = useState(0);
  const [values, setValues] = useState({
    name: "",
    comment: "",
  });

  
  const distpatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate) {
      const newRating = { ...values, rate: rate };
     
      addRate(newRating,distpatch)
    } else {
      seterr("required rate!");
    }

    //window.location.reload();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <div className="ratingform">
      <form className="ratingformatr" onSubmit={handleSubmit}>
        <label className="ratinglabel">rating</label>

        <StyledRating
          name="customized-color"
          defaultValue={rate}
          onChange={(event, newValue) => {
            console.log(newValue);
            setRate(newValue);
          }}
          precision={0.5}
          icon={<FavoriteIcon fontSize="large" />}
          emptyIcon={<FavoriteBorderIcon fontSize="large" />}
        />
        {/* <Rating name="read-only" value={2} readOnly /> */}
        <label className="ratinglabel">Name</label>
        <input
          name="name"
          type="text"
          onChange={onChange}
          required
          className=""
        />
        <label className="ratinglabel">Comment</label>
        <input
          name="comment"
          type="text"
          onChange={onChange}
          required
          className=""
        />
        <button className="ratingbtn">submit!</button>
      </form>
    </div>
  );
};

export default RatingForm;
