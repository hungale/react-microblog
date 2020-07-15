import React from "react";
import { NavLink } from "react-router-dom";
import "./PostListCard.css";

const PostListCard = ({ post, id }) => {
  console.log(post)
  return (
    <li className="PostListCard">
      <NavLink exact to={`/${id}`}>{post.title}</NavLink>
      <p>{post.description}</p>
    </li>
  );
};

export default PostListCard;