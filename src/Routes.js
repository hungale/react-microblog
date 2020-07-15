import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NewPost from "./NewPost";
import Homepage from "./Homepage";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

const Routes = () => {
  return (
    <div className="Routes">
      <Header />
      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/:id">
          <PostDetail/>
        </Route>
        <Route exact path="/:id/edit">
          <PostForm/>
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;