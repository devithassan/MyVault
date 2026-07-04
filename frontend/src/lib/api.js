import axios from "axios";

//deployment api
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


// for local development
// export const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });