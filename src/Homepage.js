import React from "react";
import { posts } from "./posts.json";
import PostList from "./PostList";

const Homepage = () => {
  console.log(posts);

  return (
    <div className="Homepage">
      WELCOME TO THE HOMEPAGE OF MICROBLOGLY!!
      <PostList posts={posts}/>
    </div>
  );
};

export default Homepage;
