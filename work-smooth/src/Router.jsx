import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from "./Pages";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Pages.Login}/>
      <Route exact path="/signup" component={Pages.Signup} />
      <Route component={Pages.ErrorPage} />
    </Switch>
  </Router>
)