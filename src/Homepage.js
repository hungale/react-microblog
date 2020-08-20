import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import * as a from "./actions";
import "./Homepage.css";


const Homepage = () => {
  const titles = useSelector(state => state.titles.sort((a,b) => b.votes - a.votes));
  const dispatch = useDispatch();

  // maybe make this only run if there are no posts
  useEffect(() => {
    // have if state to check if posts already exists.
    if (!titles?.length) {
      dispatch(a.getPostsFromAPI());
    }
  }, [dispatch, titles]);
  
  return (
    <div className="Homepage">
      <h3 className="Homepage-title">Homepage</h3>
      <p className="Homepage-description">See what's everyone up to!</p>
      <PostList />
    </div>
  );
};

export default Homepage;
