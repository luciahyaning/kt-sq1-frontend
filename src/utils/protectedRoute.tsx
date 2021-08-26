import { Redirect, Route } from "react-router";
import { getUserFromToken, isAuthenticated } from "./AuthHelper";

export default function ProtectedRoute({ ...routeProps }) {
  if (isAuthenticated()) {
    // if (
    //   getUserFromToken().roleId > 0 &&
    //   String(routeProps.path).includes("carrot")
    // ) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // } else if (
    //   !(getUserFromToken().roleId <= 2) &&
    //   String(routeProps.path).includes("group")
    // ) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // } else if (
    //   getUserFromToken().roleId > 0 &&
    //   String(routeProps.path).includes("user")
    // ) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // } else return <Route {...routeProps} />;
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "login" }} />;
  }
}

export function PrivateRoute({ ...routeProps }) {
  //if already logged in can not go to login page
  if (isAuthenticated()) {
    return <Redirect to={{ pathname: "/" }} />;
  } else return <Route {...routeProps} />;
}
