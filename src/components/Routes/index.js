import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import BookPage from "../Pages/BookPage"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route  path="/book/:id" component={BookPage} />
      <Redirect to="/"/>
    </Switch>
  );
};

export default Routes;
