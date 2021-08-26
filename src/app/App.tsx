import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./services";
import Login from "../pages/login";
import { Redirect } from "react-router";
import ProtectedRoute, { PrivateRoute } from "../utils/protectedRoute";
import { Switch } from "react-router-dom";
import Todo from "../pages/todo";
import SignUp from "../pages/signup";

function App(): JSX.Element {
  return (
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
            <Todo />
          </ProtectedRoute>
          <Redirect to="/" />
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export default App;
