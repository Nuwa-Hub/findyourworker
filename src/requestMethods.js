import axios from "axios";

//const BASE_URL = "http://localhost:8080/api";
const BASE_URL = "https://findyourworker.herokuapp.com/api";
//https://findyourworker.herokuapp.com/

//const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser? 
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken :"none";
const TOKEN=sessionStorage.getItem("accessToken")
//console.log(`${TOKEN}`)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${sessionStorage.getItem("accessToken")}` },
});
