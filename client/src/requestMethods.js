import axios from "axios";


const BASE_URL = "http://localhost:5000/";



const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWEzOGZlY2I2NjdiMTFiZTA5OWI4NSIsImlhdCI6MTY5MzI0OTA5MywiZXhwIjoxNjk0NDU4NjkzfQ.gZS_Y63HIwicQ0pYV_AembBr9Gkj7pfE6fBSbsW0isI`


// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }

// const storedToken = localStorage.getItem("userToken").split('"')[1]
// console.log(storedToken); // This will log the token value



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});