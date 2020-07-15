import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";

const Routes = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
            <Header/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
};

export default Routes ;