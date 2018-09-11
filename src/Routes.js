import React from "react";
import {Route, Switch} from "react-router-dom";
import landingPage from "./components/pages/landingPage";
import register from "./components/forms/register";
import login from "./components/forms/login";
import dashboard from "./components/pages/dashboard";


export default () =>
  <Switch>
    <Route path="/" exact component={landingPage} />
    <Route path="/register" exact component={register} />
    <Route path="/login" exact component={login} />
    <Route path="/dashboard" exact component={dashboard} />
  </Switch>
