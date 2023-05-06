import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { initializeLogger } from "common/logger";
import Login from "components/Auth/Login";
import Signup from "components/Auth/Signup";
import Dashboard from "components/Dashboard";

const App = () => {
  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact component={Dashboard} path="/" />
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Login} path="/login" />
      </Switch>
    </Router>
  );
};

export default App;
