import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import * as a from "./actions";


const Homepage = () => {
  const titles = useSelector(state => state.titles);
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
      WELCOME TO THE HOMEPAGE OF MICROBLOGLY!!
      <PostList />
    </div>
  );
};

export default Homepage;
