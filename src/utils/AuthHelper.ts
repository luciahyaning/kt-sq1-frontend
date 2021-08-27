import jwt_decode from "jwt-decode";
import { axios } from "../app/services";

export const refreshToken = async () => {
  const { data } = await axios.post(`/auth/token`);
  localStorage.removeItem("token");
  localStorage.setItem("token", data.token);
};

//get user data from token
export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  let decodedToken: any = jwt_decode(token);
  return {
    id: decodedToken.user._id,
    roleId: parseInt(decodedToken.user.roleId),
    userName: decodedToken.user.userName,
    fullName: decodedToken.user.fullName,
    email: decodedToken.user.email,
    imageProfile: decodedToken.user.imageProfile,
  };
};

//util for check if user have token
export const isAuthenticated = () => {
  return localStorage.getItem("role")
};


// //util for check if user have token
// export const isAuthenticated = () => {
//   return localStorage.getItem("token")
//     ? false
//     : localStorage.getItem("token").length > 0;
// };
