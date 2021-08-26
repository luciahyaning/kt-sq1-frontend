import axios from "axios";

//setup api base url
let baseURL = process.env.REACT_APP_BASE_URL;
// if (process.env.REACT_APP_API_STAGING) {
//   baseURL = process.env.REACT_APP_API_STAGING;
// } else if (process.env.REACT_APP_API_PRODUCTION) {
//   baseURL = process.env.REACT_APP_API_PRODUCTION;
// }

export const instance = axios.create({
  baseURL,
});

//put token in every request
instance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//reject humanity return to apes because your token expired
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      localStorage.removeItem("token");
      window.location.href = `http://localhost:3000/login`;
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
