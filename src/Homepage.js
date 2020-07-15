import React from "react";
import { useSelector } from "react-redux";
import PostList from "./PostList";

const Homepage = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className="Homepage">
      WELCOME TO THE HOMEPAGE OF MICROBLOGLY!!
      <PostList posts={posts}/>
    </div>
  );
};

export default Homepage;
