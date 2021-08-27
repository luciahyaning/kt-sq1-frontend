import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./services";
import { apolloClient } from "./services";
import Login from "../pages/login2";
import { Redirect } from "react-router";
import ProtectedRoute, { PrivateRoute } from "../utils/protectedRoute";
import { Switch } from "react-router-dom";
import Todo from "../pages/todo2";
import TransporterTrucks from "../pages/transporterTrucks";
import SignUp from "../pages/signup";
import { ApolloProvider } from '@apollo/client';

function App(): JSX.Element {
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
              HOME
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
