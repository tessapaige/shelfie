import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/form" component={Form} />
  </Switch>
);
