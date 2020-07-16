import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import * as a from "./actions";


const Homepage = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(function handleGetPosts() {
    dispatch(a.getPostsFromAPI());
  }, [dispatch]);

  return (
    <div className="Homepage">
      WELCOME TO THE HOMEPAGE OF MICROBLOGLY!!
      <PostList posts={posts} />
    </div>
  );
};

export default Homepage;
