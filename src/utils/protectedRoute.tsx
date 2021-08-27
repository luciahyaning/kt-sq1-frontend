import { Redirect, Route } from "react-router";
import { getUserFromToken, isAuthenticated } from "./AuthHelper";
import { isTranporter } from "./RoleHelper";

export default function ProtectedRoute({ ...routeProps }) {
  if (isAuthenticated()) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "login" }} />;
  }
}

export function PrivateRoute({ ...routeProps }) {
  //if already logged in can not go to login page
  if (isAuthenticated()) {
    return <Redirect to={{ pathname: "/" }} />;
    // <Route {...routeProps} />
  } else return <Route {...routeProps} />;
}


export function TranporterRoute({ ...routeProps }) {
  //if already logged in can not go to login page
  if (isTranporter()) {
    return <Route {...routeProps} />;
  } else return <Redirect to={{ pathname: "login" }} />;
}
