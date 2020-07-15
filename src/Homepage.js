import React from "react";
import { NavLink } from "react-router-dom";
import { posts } from "./posts.json";

const Homepage = () => {
  console.log(posts);
  const renderPosts = () => {
    return posts.map(post => (
    <li key={post.id}>
      <NavLink exact to={`/${post.id}`}>{post.title}</NavLink>
    </li>
    )
  )};

  return (
    <div className="Homepage">
      WELCOME TO THE HOMEPAGE OF MICROBLOGLY!!
      <ul>
        {renderPosts()}
      </ul>
    </div>
  );
};

export default Homepage;