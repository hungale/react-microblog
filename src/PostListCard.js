import React from "react";
import { NavLink } from "react-router-dom";
import "./PostListCard.css";

const PostListCard = ({ post }) => {
  return (
    <li className="PostListCard">
      <NavLink exact to={`/${post.id}`}>{post.title}</NavLink>
      <p>{post.description}</p>
    </li>
  );
};

export default PostListCard;