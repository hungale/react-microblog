import React from "react";
import { NavLink } from "react-router-dom";
import "./TopPostCard.css";

/**
 * Renders a card to list on the TopPostsList component
 */
const TopPostCard = ({ post }) => {
  return (
    <li className="TopPostCard">
      <NavLink exact to={`/posts/${post.id}`}>{post.title}</NavLink>
      <p>{post.votes} votes</p>
    </li>
  );
};

export default TopPostCard;