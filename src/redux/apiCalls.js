import {
  changePasswordFailure,
  changePasswordStart,
  changePasswordSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  addRequestFailure,
  addRequestSuccess,
} from "./requestRedux";
import {
  deleteDeveloperFailure,
  deleteDeveloperStart,
  deleteDeveloperSuccess,
  getDeveloperFailure,
  getDeveloperStart,
  getDeveloperSuccess,
  getManagerFailure,
  getManagerStart,
  getManagerSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateDeveloperFailure,
  updateDeveloperStart,
  updateDeveloperSuccess,
} from "./developerRedux";
import { getTaskFailure, getTaskStart, getTaskSuccess } from "./taskRedux";
import axios from "axios";
import { getcitiesuccess } from "./dataReducer";
import { addRatingSuccess, getRatinguccess } from "./ratingReducer";

//auth
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    sessionStorage.setItem("accessToken", res.data.accessToken);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//change password
export const changePassword = async (dispatch, data) => {
  dispatch(changePasswordStart());
  try {
    const res = await userRequest.post("/auth/changepassword", data);
    dispatch(changePasswordSuccess(res.data));
  } catch (err) {
    dispatch(changePasswordFailure());
  }
};

//update developer
export const updateCurrentUser = async (dispatch, user, id) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.put(`/users/${id}`, user);
    console.log(res.data);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logout());
};


export const getRatings = async (distpatch) => {
  try {
    const res = await publicRequest.get(`/rating/`);
    res.data=res.data.reverse();
    distpatch(getRatinguccess(res.data))
    
  } catch (err) {
    console.log(err);
   
  }
};

export const addRate = async (rate,distpatch) => {
  try {
    const res = await publicRequest.post(`/rating/`, rate);
    distpatch(addRatingSuccess(res.data))
  } catch (err) {
    console.log(err);

  }
}
