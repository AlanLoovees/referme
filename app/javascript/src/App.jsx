import React, { useEffect } from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import InvitationAccept from "components/Auth/InvitationAccept";
import Login from "components/Auth/Login";
import Signup from "components/Auth/Signup";
import PrivateRoute from "components/common/PrivateRoute";
import Dashboard from "components/Dashboard";

const App = () => {
  const authToken = localStorage.getItem("token");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);

  useEffect(() => {
    initializeLogger();
    setAuthHeaders();
  }, []);

  return (
    <Router>
      <Switch>
        <Route component={InvitationAccept} path="/invitation/accept" />
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Login} path="/login" />
        <PrivateRoute
          component={Dashboard}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default App;
