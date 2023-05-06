import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { initializeLogger } from "common/logger";

const App = () => {
  useEffect(() => {
    initializeLogger();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/signup" render={() => <div>Sign Up</div>} />
        <Route exact path="/login" render={() => <div>Login</div>} />
      </Switch>
    </Router>
  );
};

export default App;
