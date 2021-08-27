import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import {QueryClientProvider} from "react-query";

import {apolloClient, queryClient,} from "./services";
import {Redirect, Route} from "react-router";
import ProtectedRoute, {PrivateRoute, TranporterRoute } from "../utils/protectedRoute";
import {Switch} from "react-router-dom";
import Todo from "../pages/todo2";
import TransporterTrucks from "../pages/transporterTrucks";
import SignUp from "../pages/signup";
import {ApolloProvider} from '@apollo/client';
import Login from "../pages/login";

function App(): JSX.Element {
  let role = parseInt(localStorage.getItem("role"))
  
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/register">
              <SignUp />
            </PrivateRoute>
            <PrivateRoute exact path="/login">
              <Login />
            </PrivateRoute>
            <ProtectedRoute exact path="/">
              {
                role == 1 && 
                <Redirect to={{ pathname: "/transporter/trucks" }} />
              }
              {
                role == 2 && 
                <Redirect to={{ pathname: "/shiper" }} />
              }
            </ProtectedRoute>
            <ProtectedRoute exact path="/transporter/trucks">
              <TransporterTrucks />
            </ProtectedRoute>
            <Redirect to="/" />
          </Switch>
        </div>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
